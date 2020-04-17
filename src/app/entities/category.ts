export class Category {
    id: number;
    name: string;
    subCategories: Category[];

    constructor(id: number, name: string, subCategories: Category[]) {
        this.id = id;
        this.name = name;
        this.subCategories = subCategories;
    }
}
