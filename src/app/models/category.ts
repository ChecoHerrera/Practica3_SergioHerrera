export class Category {

    private name: string;
    dishes = [];
    constructor(name: string) {
        this.setName(name);

    }
    getName() { return this.name };
    setName(value) { this.name = value; };


    getDishes() { return this.dishes };
    setDishes(value) { this.dishes.push(value); };

}