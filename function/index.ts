// "Normal function" hay còn gọi "Named function"
function _trungBinhCong(x: number, y: number): void {
    let avg = (x + y) / 2;
    console.log("Trung bình cộng của " + x + " và " + y + " là: " + avg);
}
_trungBinhCong(3, 9);

/* anonymous funtion */

// type 1: whithout funtion name
var anonymFun = function (x: number, y: number): void {
    let avg = (x + y) / 2;
    console.log("Trung bình cộng của " + x + " và " + y + " là: " + avg);
}
anonymFun(2, 4);
// type 2: Inferring the type (suy kiểu)
var _anonymFun: (agr1: number, agr2: number) => void = function (x, y) {
    let avg = (x + y) / 2;
    console.log("Trung bình cộng của " + x + " và " + y + " là: " + avg);
}
_anonymFun(2, 4);
// type 3: Function type (kiểu hàm)
let varFun: (agr1: number, agr2: number) => number = function (x: number, y: number): number {
    console.log(x + y);
    return x + y;
};
varFun(12, 3);


