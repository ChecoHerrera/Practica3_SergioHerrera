export class Dish {

    private name: string;
    private prace: string;
    private description: string;
    private catName: string;

    constructor(name: string, prace: string, description: string, catName: string) {

        this.setName(name);
        this.setPrace(prace);
        this.setDescription(description);
        this.setCatName(catName);


    }
    getName() { return this.name };
    getPrace() { return this.prace };
    getDescription() { return this.description };
    getCatName() {return this.catName; };

    setName(value) { this.name = value; };
    setPrace(value) { this.prace = value; };
    setDescription(value) { this.description = value; };
    setCatName(value) { this.catName = value; };
}