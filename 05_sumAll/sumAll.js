const sumAll = function(first, second) {
    let sum = 0;
    if (first < 0 || second < 0 || !Number.isInteger(first) || !Number.isInteger(second)){
        return "ERROR";
    }

    if (first >= second){
        let low = second;
        let high = first;
        for (let i = low; i <= high; i++){
            sum += i;
        }
    }
    else{
        let low = first;
        let high = second;
        for (let i = low; i <= high; i++){
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
