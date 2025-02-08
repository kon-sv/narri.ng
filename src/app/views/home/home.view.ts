import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { CardComponent } from "../../components/card/card.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCoffee,
} from '@fortawesome/free-solid-svg-icons';
import { TypingTextPipe } from '../../pipes/typing-text.pipe';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, FontAwesomeModule, CardComponent, TypingTextPipe, RouterModule],
  templateUrl: './home.view.html',
  styleUrl: './home.view.scss'
})
export class HomeView {

  faCoffee = faCoffee;
}
