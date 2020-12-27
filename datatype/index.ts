{
    // boolean
    let isDone: boolean = false;
    console.log(isDone);

    //String 
    let name: string;
    name = 'Bob';

    console.log(`Hello ${name}`);

    let list: number[] = [1, 2, 1];

    let listNumber: Array<number>;
    listNumber = [0, 1, 'd', 3, 4]

    enum status { ok = 10, no_ok, done }
    console.log(status.ok);

    let kieu: any;
    kieu = '123';
    let ab = <number> kieu;
    console.log(ab);
}