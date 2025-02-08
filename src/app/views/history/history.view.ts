import { Component } from '@angular/core';
import { TypingTextPipe } from '../../pipes/typing-text.pipe';

@Component({
  selector: 'app-history',
  imports: [TypingTextPipe],
  templateUrl: './history.view.html',
  styleUrl: './history.view.scss'
})
export class HistoryView {

}
