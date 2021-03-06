var Animal = /** @class */ (function () {
    function Animal(theName, protectedName, publicName) {
        this._name = theName;
        this.protectedField = protectedName;
        this.publicField = publicName;
    }
    Animal.prototype.print = function () {
        console.log('private:', this._name);
        console.log('protected:', this.protectedField);
        console.log('public:', this.publicField);
    };
    return Animal;
}());
var objAnimal = new Animal("private value", "protected value", "public value");
// console.log('private ', objAnimal._name);
//Property '_name' is private and only accessible within class 'Animal'
// console.log('protectedField', objAnimal.protectedField); 
//Property 'protectedField' is protected and only accessible within class 'Animal' and its subclasses.
console.log('objAnimal.publicField =>', objAnimal.publicField);
objAnimal.print();
