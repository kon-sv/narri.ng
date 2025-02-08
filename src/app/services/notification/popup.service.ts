import { Injectable, signal } from '@angular/core';
import { Popup } from '../../interfaces/popup.interface';


enum NotificationTypeEnum {
  Error,
  Success,
  Info
};

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  popups = signal<Popup[]>([]);

  constructor() { }


  private notification(content: string = 'test', duration: number = 50000, type: NotificationTypeEnum = NotificationTypeEnum.Info) {
    const timestamp = Date.now()
    this.popups.update((popups) => { popups.push({ timestamp, type, duration, content }); return popups; })
    setTimeout(() => {
      this.popups.update((popups) => { return popups.filter((popup) => popup.timestamp !== timestamp); })
    }, duration)
    return;
  }

  notifyError(value: string) {
    this.notification(value)
  }

  notifySuccess() {
    this.notification()
  }

  notifyInfo() {
    this.notification()
  }

}
