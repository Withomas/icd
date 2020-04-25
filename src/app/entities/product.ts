export class Product {
  price: number;
  colors: string[];
  title: string;
  categoryId: number;
  dimensions: string[];

  constructor(price: number, colors: string[], title: string, categoryId: number, dimensions: string[]) {
    this.price = price;
    this.colors = this.colors;
    this.title = title;
    this.categoryId = categoryId;
    this.dimensions = dimensions;
  }
}
