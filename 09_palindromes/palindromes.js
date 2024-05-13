const palindromes = function (input) {
    const simplified = input.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversed = Array.from(simplified).reverse().join("");
    return simplified === reversed;
};

// Do not edit below this line
module.exports = palindromes;
