import { Component } from '@angular/core';
import {
  CustomToastrService,
  ToastrMessageType,
  ToastrPosition,
} from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'e-commerce-client-angular';
  constructor(private toastr: CustomToastrService) {
    toastr.message('Merhaba', 'Batuhan', {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopCenter,
    });
  }
}
