export class Product {
  price: number;
  color: string;
  title: string;
  categoryId: number;

  constructor(price: number, color: string, title: string, categoryId: number) {
    this.price = price;
    this.color = color;
    this.title = title;
    this.categoryId = categoryId;
  }
}
