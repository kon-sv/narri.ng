import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Popup } from '../../../interfaces/popup.interface';
import { PopupService } from '../../../services/notification/popup.service';
import { PopupComponent } from "../popup/popup.component";

@Component({
  selector: 'app-notification-container',
  imports: [PopupComponent],
  templateUrl: './notification-container.component.html',
  styleUrl: './notification-container.component.scss',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NotificationContainerComponent {
  popupService: PopupService = inject(PopupService)

  constructor() {
  }

}
