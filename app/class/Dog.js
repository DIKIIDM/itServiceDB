class Dog {
    constructor(name) {
        this.name = name;
    }
    sayName() {
        console.log(this.name);
    }
}
module.exports = Dog;