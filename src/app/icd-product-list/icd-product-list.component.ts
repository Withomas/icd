import { CategoriesData } from './../../data/categories';
import { Category } from 'src/app/entities/category';
import { Product } from 'src/app/entities/product';
import { Component, OnInit } from '@angular/core';
import { ProductsData } from 'src/data/products';

@Component({
  selector: 'app-icd-product-list',
  templateUrl: './icd-product-list.component.html',
  styleUrls: ['./icd-product-list.component.scss']
})
export class IcdProductListComponent implements OnInit {

  public Products: Product[];
  public FilteredProducts: Product[];

  public Categories: Category[];
  public SubCategories: Category[];

  public SelectedCategory: Category;
  public SelectedSubCategory: Category;

  constructor() {
  }

  ngOnInit(): void {
    this.Products = ProductsData;
    this.Categories = CategoriesData;
    this.UpdateProductList();
  }

  /**
   * CategoryChanged
   */
  public CategoryChanged() {
    this.SubCategories = this.SelectedCategory.subCategories;
    this.SelectedSubCategory = null;
    this.UpdateProductList();
  }

  /**
   * SubCategoryChanged
   */
  public SubCategoryChanged() {
    this.UpdateProductList();
  }

  /**
   * UpdateProductList
   */
  public UpdateProductList(): void {

    // On vide le tableau
    this.FilteredProducts = [];

    // Dans le cas où une sous catégorie est séléctionnée
    if (this.SelectedSubCategory) {

      // Filtrer les produits par sous-categories
      const productsFound = this.Products.filter(x => x.categoryId === this.SelectedSubCategory.id);

      // Ajouter les produits dans le tableau FilteredProducts
      for (const product of productsFound) {
        this.FilteredProducts.push(product);
      }

      // Logique terminée
      return;
    }

    // Dans le cas où une catégorie est sélectionnée
    if (this.SelectedCategory) {

      for (const subCategory of this.SelectedCategory.subCategories) {
        // Filtrer les produits par sous-categories
        const productsFound = this.Products.filter(x => x.categoryId === subCategory.id);

        // Ajouter les produits dans le tableau FilteredProducts
        for (const product of productsFound) {
          this.FilteredProducts.push(product);
        }
      }

      // Logique terminée
      return;
    }

    // Aucune catégorie, ni sous catégorie ne sont sélectionnée
    this.FilteredProducts = this.Products;
  }

}
