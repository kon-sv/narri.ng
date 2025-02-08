import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TypingTextPipe } from './pipes/typing-text.pipe';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MenuLinksComponent } from './components/menu-links/menu-links.component';
import { NotificationContainerComponent } from './components/notification/notification-container/notification-container.component';
import { DesktopComponent } from './components/desktop/desktop.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, FontAwesomeModule, TypingTextPipe, MenuLinksComponent, NotificationContainerComponent, DesktopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'narri';

  faCoffee = faCoffee;

  arr1 = Array<number | string>();
  arr2 = [];


  getItem = (item: number | undefined) => {
    return item?.toString();
  }
}
