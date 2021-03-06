var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(theName, age) {
        this.name = theName;
        this.age = age;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " " + this.age + " year old, moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
//using the "super" keywords to 
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, age, yub) {
        var _this = _super.call(this, name, age) || this;
        _this.yub = yub;
        return _this;
    }
    Snake.prototype.move = function (distanceInMeter) {
        if (distanceInMeter === void 0) { distanceInMeter = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeter);
    };
    Snake.prototype.yubMethod = function () {
        console.log('yubMethod: ' + this.yub);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name, age) {
        return _super.call(this, name, age) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python", 19, 'yu yub & pặc pặc');
var tom = new Horse("Tommy the Palomino", 20);
sam.move();
sam.yubMethod();
tom.move(34);
