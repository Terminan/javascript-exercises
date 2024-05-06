const sumAll = function(int1, int2) {
    if (typeof int1 === "number" && typeof int2 === "number") {
        if (!int1 < 0 || !int2 < 0) {
            let array = [];
            let sum = 0;
            if (int1 < int2) {
                while (int1 <= int2) {
                    sum += int1;
                    int1++;
                }
            } else {
                while (int2 <= int1) {
                    sum += int2;
                    int2++;
                }
            }
            return sum;
        } else {
            return "ERROR";
        }
    } else {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
