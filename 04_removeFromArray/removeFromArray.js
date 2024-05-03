const removeFromArray = function(array, ...removals) {
    let newArray = [];
    for (i = 0; i < array.length; i++) {
        if (!removals.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
