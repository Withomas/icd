import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../entities/product';


@Component({
  selector: 'app-icd-product-card',
  templateUrl: './icd-product-card.component.html',
  styleUrls: ['./icd-product-card.component.scss']
})
export class IcdProductCardComponent implements OnInit {

@Input() Product: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
