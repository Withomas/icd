import { Category } from 'src/app/entities/category';

export const CategoriesData: Category[] = [
  new Category(
    1,
    'Smartphones',
    [
      new Category(2, 'Apple', null),
      new Category(3, 'Samsung', null)
    ]),
  new Category(
    4,
    'TV',
    [
      new Category(5, 'Philips', null),
      new Category(6, 'LG', null)
    ])
];
