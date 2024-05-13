const fibonacci = function(num) {
    if (typeof num !== "number") {
        num = parseInt(num);
    }
    if (num < 0) {
        return "OOPS";
    }
    if (num === 0) {
        return 0;
    }
    let array = [1, 1];
    while (array.length < num) {
        array.push(array[array.length - 1] + array[array.length - 2]);
    }
    return array[array.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
