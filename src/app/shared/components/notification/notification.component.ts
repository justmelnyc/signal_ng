import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes,
} from '@angular/animations';

import { NotificationService } from '../../../_core/services';
import { Notification } from '../../../_core/models/notification.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('show', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          300,
          keyframes([
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ])
        ),
      ]),
      transition('* => void', [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
    trigger('flyToLeft', [
      state('show', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        animate(
          600,
          keyframes([
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
            style({ opacity: 0, transform: 'translateX(100%)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateX(-15px)', offset: 0.6 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1.0 }),
          ])
        ),
      ]),
      transition('* => void', [
        animate(
          300,
          keyframes([
            style({ opacity: 1, transform: 'translateX(0)', offset: 0 }),
            style({ opacity: 1, transform: 'translateX(15px)', offset: 0.7 }),
            style({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 }),
          ])
        ),
      ]),
    ]),
  ],
})
export class NotificationComponent implements OnInit {
  notifications: Array<Notification> = [];

  constructor(private notificationService: NotificationService) {
    this.notifications = this.notificationService.notifications;
  }

  ngOnInit() {}
}
