import { Component } from '@angular/core';
import { MainPaneComponent } from '../main-pane/main-pane.component';
import { WindowCardComponent } from '../window-card/window-card.component';

@Component({
  selector: 'app-desktop',
  imports: [MainPaneComponent, WindowCardComponent],
  templateUrl: './desktop.component.html',
  styleUrl: './desktop.component.scss'
})
export class DesktopComponent {

}
