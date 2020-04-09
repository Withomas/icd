import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';

@Component({
  selector: 'app-icd-product-list',
  templateUrl: './icd-product-list.component.html',
  styleUrls: ['./icd-product-list.component.scss']
})
export class IcdProductListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

class Products{
  return Products = [
    {price: 1159, color: "black", title: "Iphone 11 pro"},
    {price: 1850, color: "grey", title: "Samsung Fold"}
  ]
}