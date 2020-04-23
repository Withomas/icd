import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entities/product';


@Component({
  selector: 'app-product-list-design',
  templateUrl: './product-list-design.component.html',
  styleUrls: ['./product-list-design.component.scss']
})
export class ProductListDesignComponent implements OnInit {

@Input() Product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
