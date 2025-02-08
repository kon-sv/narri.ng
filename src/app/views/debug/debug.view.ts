import { Component, Inject } from '@angular/core';
import { DictionaryService } from '../../services/dictionary.service';

@Component({
  selector: 'app-debug',
  imports: [],
  templateUrl: './debug.view.html',
  styleUrl: './debug.view.scss'
})
export class DebugView {
  dictionaryService: DictionaryService;

  constructor(dictionaryService: DictionaryService) {
    this.dictionaryService = dictionaryService;
  }
}
