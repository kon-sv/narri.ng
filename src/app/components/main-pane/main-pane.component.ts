import { Component } from '@angular/core';
import { MenuLinksComponent } from "../menu-links/menu-links.component";
import { TypingTextPipe } from "../../pipes/typing-text.pipe";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterOutlet } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-pane',
  imports: [MenuLinksComponent, TypingTextPipe, RouterOutlet, FontAwesomeModule],
  templateUrl: './main-pane.component.html',
  styleUrl: './main-pane.component.scss'
})
export class MainPaneComponent {
  faCoffee = faCoffee;
}
