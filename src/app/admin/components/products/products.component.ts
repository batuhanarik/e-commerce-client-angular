import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { Product } from 'src/app/contracts/product';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent extends BaseComponent {
  constructor(
    spinner: NgxSpinnerService,
    private httpClientService: HttpClientService
  ) {
    super(spinner);
  }
  ngOnInit() {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService
      .get<Product[]>({ controller: 'products' })
      .subscribe((data) => {
        console.warn(data);
      });

    // this.httpClientService
    //   .post(
    //     { controller: 'products' },
    //     { name: 'Kalem', stock: 100, price: 15 }
    //   )
    //   .subscribe();

    // this.httpClientService
    //   .put(
    //     { controller: 'products' },
    //     {
    //       id: 'a690c701-c2b8-488f-ad64-19f550a8c76d',
    //       name: 'Kağıt',
    //       stock: 500,
    //       price: 6.1,
    //     }
    //   ).subscribe();

    // this.httpClientService
    //   .delete(
    //     { controller: 'products' },
    //     '39abdb00-14be-4907-b0b6-b604641687f8'
    //   )
    //   .subscribe();
  }
}
