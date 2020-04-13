import { Component, OnInit } from '@angular/core';

import { Product } from './../entities/product';

@Component({
  selector: 'app-icd-product-list',
  templateUrl: './icd-product-list.component.html',
  styleUrls: ['./icd-product-list.component.scss']
})
export class IcdProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * GetProducts
   */
  public GetProducts() {

    return [
      new Product(1159, 'Black', 'IPhone 11 pro'),
      new Product(1850, 'Grey', 'Samsung Fold'),
    ];
  }

}
