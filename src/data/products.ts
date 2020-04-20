import { Product } from 'src/app/entities/product';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { getCurrencySymbol } from '@angular/common';

export const ProductsData: Product[] = [
    new Product(1159, ['#57606f', '#d1ccc0', '#218c74', '#ffda79'], 'IPhone 11 pro', 2, '6,1"'),
    new Product(1850, ['#d1ccc0', '#1e272e'], 'Samsung Fold', 3, '7,3"'),
    new Product(15000, ['#485460', '#d2dae2'], 'LG signature TV R9 8k', 6, '88"'),
    new Product(379, ['#1e272e'], 'TV LED Philips 43PUS6704 43" 4K UHD (2160p)', 5, '43"'),
];
