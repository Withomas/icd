export class Product {
  price: number;
  colorId: string[];
  title: string;
  categoryId: number;
  dimensions: string;

  constructor(price: number, colorId: string[], title: string, categoryId: number, dimensions: string) {
    this.price = price;
    this.colorId = [];
    this.title = title;
    this.categoryId = categoryId;
    this.dimensions = dimensions;

  }
}
