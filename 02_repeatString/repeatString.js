const repeatString = function(string, times) {
    let base = "";
    if (times < 0){
        return "ERROR";
    }
    else{
        for (let i = 0; i < times; i++){
            base += string;
        }
    }
    return base;
};

// Do not edit below this line
module.exports = repeatString;
