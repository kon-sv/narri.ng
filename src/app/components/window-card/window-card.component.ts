import { CommonModule } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
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
  width = input(500);

  windowStyle = computed(() => {
    return {
      'max-width': this.width().toString() + 'px',
      // 'position': 'absolute'
    }
  })

  faXmark = faXmark;
  faSquare = faSquare;
  faCircle = faCircle;

  constructor() {
    console.log(this.width);
  }


  testDrag() {
    console.log('drag')
  }

}
