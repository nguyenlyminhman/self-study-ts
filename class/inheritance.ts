class Animal {
    name: string;
    age: number;
    constructor(theName: string, age: number) {
        this.name = theName;
        this.age = age
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} ${this.age} year old, moved ${distanceInMeters}m.`);
    }
}
//using the "super" keywords to 
class Snake extends Animal {
    yub : string;
    constructor(name: string, age: number, yub: string) {
        super(name, age);
        this.yub = yub;
    }
    move(distanceInMeter = 5) {
        console.log("Slithering...");
        super.move(distanceInMeter);
    }

    yubMethod(){
        console.log('yubMethod: ' + this.yub );
        
    }
}

class Horse extends Animal {
    constructor(name: string, age: number) {
        super(name, age);
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python", 19, 'yu yub & pặc pặc');
let tom: Animal = new Horse("Tommy the Palomino", 20);

sam.move();
sam.yubMethod();
tom.move(34);