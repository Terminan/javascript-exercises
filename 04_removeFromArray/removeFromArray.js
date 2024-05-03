const removeFromArray = function(array, ...removals) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let checkToKeep = true;
        for (let j = 0; j < removals.length; j++) {
            checkToKeep = true;
            if (array[i] === removals[j]) {
                checkToKeep = false;
            }
        }
        if (checkToKeep) {
            newArray.push(array[i]);
        }
    }
};

// Do not edit below this line
module.exports = removeFromArray;
