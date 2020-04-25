import { Category } from 'src/app/entities/category';

export const CategoriesData: Category[] = [
  new Category(
    1,
    'High-Tech',
    [
      new Category(2, 'Smartphones', null),
      new Category(3, 'TV', null),
      new Category(4, 'VR', null),
      new Category(5, 'Assistant vocaux', null),
      new Category(6, 'Ordinateur', null),
      new Category(7, 'Écran', null),
      new Category(8, 'Simulation jeu vidéo', null)
    ]),
  new Category(
    9,
    'Vêtements',
    [
      new Category(10, 'Chaussures', null),
      new Category(11, 'Montres', null)
    ]),
    new Category(
      12,
      'Photographie',
      [
        new Category(10, 'Caméra', null),
        new Category(11, 'Appareil-Photo', null)
      ]),
      new Category(
        12,
        'Audio',
        [
          new Category(13, 'Casques Audio', null),
          new Category(14, 'Haut-parleur', null)
        ]),
];
