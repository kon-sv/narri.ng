import { Component, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DictionaryService } from '../../services/data/dictionary.service';
import { CommonModule, NgFor } from '@angular/common';


interface Record {
  id: number, value: any
}

@Component({
  selector: 'app-dictionary',
  imports: [CommonModule, NgFor],
  templateUrl: './dictionary.view.html',
  styleUrl: './dictionary.view.scss'
})
export class DictionaryView {


  data?: Observable<any[]>;
  records = signal<Record[]>(Array<Record>())

  subscriptions: Subscription[] = [];
  constructor(private dictionaryService: DictionaryService) {
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s.unsubscribe());
  }

  async ngOnInit() {
    this.dictionaryService.getIndexData().subscribe((data) => {
      const entries = (Object.entries(data).map(([key, value]) => {
        return {
          id: Number(key),
          value
        }
      }));
      this.records.set(entries)
    });
  }

}
