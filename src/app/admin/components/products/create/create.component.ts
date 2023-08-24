import { Component, EventEmitter, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Create_Product } from 'src/app/contracts/create_product';
import {
  AlertifyOptions,
  AlertifyService,
  MessageType,
  Position,
} from 'src/app/services/admin/alertify.service';
import { FileUploadOptions } from 'src/app/services/common/file-upload/file-upload.component';
import { ProductService } from 'src/app/services/common/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent extends BaseComponent {
  @Output() createdProduct: EventEmitter<Create_Product> = new EventEmitter();
  @Output() fileUploadOptions: Partial<FileUploadOptions> = {
    action: 'upload',
    controller: 'products',
    explanation: 'Resimleri sürükleyin veya seçin..',
    isAdminPage: true,
    accept: '.png, .jpg, .jpeg',
  };
  constructor(
    spinner: NgxSpinnerService,
    private productService: ProductService,
    private alertify: AlertifyService
  ) {
    super(spinner);
  }

  create(
    name: HTMLInputElement,
    stock: HTMLInputElement,
    price: HTMLInputElement
  ) {
    this.showSpinner(SpinnerType.BallAtom);
    const createProduct: Create_Product = new Create_Product();
    createProduct.name = name.value;
    createProduct.stock = parseInt(stock.value);
    createProduct.price = parseFloat(price.value);

    if (!name.value) {
      this.alertify.message('Lütfen ürün adını giriniz.', {
        dismissOthers: false,
        messageType: MessageType.Warning,
        position: Position.BottomRight,
      });
      return;
    }
    if (parseInt(stock.value) < 0) {
      this.alertify.message('Ürün stoğunu 0 veya daha büyük giriniz.', {
        dismissOthers: false,
        messageType: MessageType.Warning,
        position: Position.BottomRight,
      });
    }

    this.productService.create(
      createProduct,
      () => {
        this.hideSpinner(SpinnerType.BallAtom);
        this.alertify.message('Ürün başarıyla eklenmiştir.', {
          dismissOthers: false,
          messageType: MessageType.Success,
          position: Position.TopRight,
        });
        this.createdProduct.emit(createProduct);
      },
      (errorMessage) => {
        this.alertify.message(errorMessage, { messageType: MessageType.Error });
      }
    );
  }
}
