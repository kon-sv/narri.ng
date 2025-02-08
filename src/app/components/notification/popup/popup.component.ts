import { Component, Input } from '@angular/core';
import { Popup } from '../../../interfaces/popup.interface';
import { CardComponent } from "../../card/card.component";
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-popup',
  imports: [CardComponent, FontAwesomeModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  @Input() popup!: Popup


  faError = faExclamationCircle
}
