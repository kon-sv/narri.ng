import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { faXmark, faSquare, faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-window-card',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './window-card.component.html',
  styleUrl: './window-card.component.scss'
})
export class WindowCardComponent {
  @Input() title: string = 'Title'

  faXmark = faXmark;
  faSquare = faSquare;
  faCircle = faCircle;

  constructor() {
  }


  testDrag() {
    console.log('drag')
  }

}
