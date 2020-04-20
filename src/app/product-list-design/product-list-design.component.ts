import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/entities/product';
import { ProductsData } from 'src/data/products';
import { CategoriesData } from './../../data/categories';
import { Category } from 'src/app/entities/category';

@Component({
  selector: 'app-product-list-design',
  templateUrl: './product-list-design.component.html',
  styleUrls: ['./product-list-design.component.scss']
})
export class ProductListDesignComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
