import { Injectable } from '@angular/core';
import {Notification} from '../../models/notification.model';

@Injectable()
export class NotificationService {
  notifications: Array<Notification> = [];

  constructor() {}

  showNotification(message: string, type: string, dismiss: number = 2000) {
    const notify: Notification = new Notification();
    notify.message = message;
    notify.type = type;
    notify.dismiss = dismiss;
    notify.timer.time = 0;
    notify.hidden = false;
    notify.index = this.notifications.length
      ? this.notifications.length - 1
      : this.notifications.length;

    clearInterval(notify.timer.handle);

    this.notifications.push(notify);

    notify.timer.handle = setInterval(() => {
      notify.timer.time++;
      if (notify.timer.time > notify.dismiss / 1000) {
        notify.hidden = true;
        clearInterval(notify.timer.handle);
      }
    }, 1000);
  }
}
