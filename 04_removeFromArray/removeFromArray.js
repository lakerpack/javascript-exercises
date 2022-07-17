const removeFromArray = function(array, ...nums) {
    let newarray = array.filter(val => !(nums.includes(val)));
    console.log(newarray);
    return newarray;
};

// Do not edit below this line
module.exports = removeFromArray;
