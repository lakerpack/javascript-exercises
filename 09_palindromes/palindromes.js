const palindromes = function (str) {
    let line = str.replace(/\W/g, '').split("").reverse().join("").toLowerCase();
    return line == str.replace(/\W/g, '').toLowerCase();

};

// Do not edit below this line
module.exports = palindromes;
