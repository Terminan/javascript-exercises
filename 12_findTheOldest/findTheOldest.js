const findTheOldest = function(array) {
    const oldest = array.sort((a, b) => {
        if (typeof a.yearOfDeath !== "number") {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (typeof b.yearOfDeath !== "number") {
            b.yearOfDeath = new Date().getFullYear();
        }
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1;
        } else {
            return 1;
        }
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
