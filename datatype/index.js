{
    // boolean
    var isDone = false;
    console.log(isDone);
    //String 
    var name_1;
    name_1 = 'Bob';
    console.log("Hello " + name_1);
    var list = [1, 2, 1];
    var listNumber = void 0;
    listNumber = [0, 1, 'd', 3, 4];
    var status_1 = void 0;
    (function (status) {
        status[status["ok"] = 10] = "ok";
        status[status["no_ok"] = 11] = "no_ok";
        status[status["done"] = 12] = "done";
    })(status_1 || (status_1 = {}));
    console.log(status_1.ok);
    var kieu = void 0;
    kieu = '123';
    var ab = kieu;
    console.log(ab);
}
