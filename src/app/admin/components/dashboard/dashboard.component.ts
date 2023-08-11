import { Component } from '@angular/core';
import {
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  constructor(private alertify: AlertifyService) {}
  ngOnInit() {}
  m() {
    this.alertify.message('Merhaba', {
      messageType: MessageType.Error,
      dismissOthers: true,
      position: Position.BottomLeft,
      delay: 3500,
    });
  }
  d() {
    this.alertify.dismiss();
  }
}
