export class Product {
  price: number;
  colors: string[];
  title: string;
  categoryId: number;
  dimensions: string[];
  pictureName: string;

  constructor(price: number, colors: string[], title: string, categoryId: number, dimensions: string[], pictureName: string) {
    this.price = price;
    this.colors = colors;
    this.title = title;
    this.categoryId = categoryId;
    this.dimensions = dimensions;
    this.pictureName = pictureName;
  }
}
