export class Product {
  price: number;
<<<<<<< HEAD
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

=======
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
>>>>>>> c612847e916c39b563324a9fc506f846491e988a
  }
}
