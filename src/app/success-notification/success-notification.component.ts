import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'success-notification',
  templateUrl: './success-notification.component.html',
  styleUrls: ['./success-notification.component.scss']
})
export class SuccessNotificationComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) readonly data?) {}
}
