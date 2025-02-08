import { Component, Inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DictionaryService } from '../../services/dictionary.service';
import { Observable, Subscription } from 'rxjs';
import { CommonModule, NgFor } from '@angular/common';


interface Record {
  id: number, value: any
}

@Component({
  selector: 'app-debug',
  imports: [CommonModule, NgFor],
  templateUrl: './debug.view.html',
  styleUrl: './debug.view.scss'
})
export class DebugView implements OnInit, OnDestroy {

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

    // this.subscriptions.push(
    //   this.data.subscribe(
    //     (d) => {
    //       console.log(d);
    //     }
    //   ))
  }


}
