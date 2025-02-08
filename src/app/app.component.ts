import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypingTextPipe } from './pipes/typing-text.pipe';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuLinksComponent } from './components/menu-links/menu-links.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, TypingTextPipe, MenuLinksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'narri';

  faCoffee = faCoffee;
}
