const fibonacci = function(index) {
    let fibo = [1, 1]
    let realindex = index-1;
    if(index < 0){
        return "OOPS";
    }
    for (let i = fibo.length-1; i < realindex; i++){
        fibo.push(fibo[i]+fibo[i-1])
    }
    return fibo[realindex];
};

// Do not edit below this line
module.exports = fibonacci;
