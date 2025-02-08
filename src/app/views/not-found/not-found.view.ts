import { Component } from '@angular/core';
import { TypingTextPipe } from '../../pipes/typing-text.pipe';

@Component({
  selector: 'app-not-found',
  imports: [TypingTextPipe],
  templateUrl: './not-found.view.html',
  styleUrl: './not-found.view.scss'
})
export class NotFoundView {

}
