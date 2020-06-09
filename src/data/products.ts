import { Product } from 'src/app/entities/product';
import { getQueryPredicate } from '@angular/compiler/src/render3/view/util';
import { getCurrencySymbol } from '@angular/common';

export const ProductsData: Product[] = [
<<<<<<< HEAD
    new Product(1159, ['#57606f', '#d1ccc0', '#218c74', '#ffda79'], 'IPhone 11 pro', 2, '6,1"'),
    new Product(1850, ['#d1ccc0', '#1e272e'], 'Samsung Fold', 3, '7,3"'),
    new Product(15000, ['#485460', '#d2dae2'], 'LG signature TV R9 8k', 6, '88"'),
    new Product(379, ['#1e272e'], 'TV LED Philips 43PUS6704 43" 4K UHD (2160p)', 5, '43"'),
=======
    new Product(1159, ['#57606f', '#d1ccc0', '#218c74', '#ffda79'], 'IPhone 11 pro', 2, ['6,1"'], '11pro.png'),
    new Product(1850, ['#d1ccc0', '#1e272e'], 'Samsung Fold', 2, ['7,3"'], 'fold.png'),
    new Product(15000, ['#485460', '#d2dae2'], 'LG signature TV R9', 3, ['88"', '79"'], 'lgsignature.jpg'),
    new Product(379, ['#1e272e'], 'Philips 43PUS6704', 3, ['43"', '52"'], 'TVphilips.jpg'),

    new Product(420, ['#2f3640'], 'Applewatch series 5', 11, ['40mm', '44mm'], 'applewatch.png'),
    new Product(850, ['#353b48'], 'Samsung LC49HG90DMU', 7, ['49"'], 'ecran.jpg'),
    new Product(300, ['#1e272e'], 'Logitech G29', 8, [], 'g29.jpg'),
    new Product(180, ['#f5f6fa', '#2f3640'], 'Logitech G935', 13, [], 'g935.jpeg'),
    new Product(1690, ['#273c75', '#2f3640'], 'HTC Vive Pro', 4, [], 'htcvive.png'),
    new Product(45000, ['#2d3436', '#d63031'], 'Red Epic-W', 10, [], 'red.png'),
    new Product(4500, ['#273c75', '#95a5a6'], 'Rolex Submariner', 11, ['40mm'], 'rolex.png'),
    new Product(120, ['#2d3436', '#d63031'], 'Nike tn', 10, ['35', '38', '40', '46'], 'tn.jpg'),
    new Product(1800, ['#2d3436'], 'MSI Aegis ti3', 6, [], 'tourpc.jpg'),

>>>>>>> c612847e916c39b563324a9fc506f846491e988a
];
