{
    // boolean
    let isDone: boolean = false;
    console.log(isDone);

    //String 
    let name: string;
    name = 'Bob';

    console.log(`Hello ${name}`);

    //Array
    //declare type 1:
    let list: number[] = [1, 2, 1];
    
    //declare type 2:
    let listNumber: Array<number>;
    listNumber = [0, 1, 2, 3, 4]

    //Enum
    enum status { ok, no_ok, done }
    console.log(status.ok); // output: 0

    enum type { ok = 10, no_ok, done }
    console.log(status.ok); // output: 10, the next position is increased by one value;

    //Any
    //là kiểu dữ liệu bất kì
    let kieu: any;
    kieu = '123'; // có thế gán kiểu chuỗi
    let kieu_1: any;
    kieu_1 = 111; // có thể gán kiểu số hoặc kiểu bất kì

    // ép kiểu
    let ab = <number> kieu;
    console.log(ab);
}