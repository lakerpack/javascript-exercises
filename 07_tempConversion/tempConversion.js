const ftoc = function(temp) {
  newtemp = ((temp-32)/1.8);
  return Math.round(newtemp*10)/10;
};

const ctof = function(temp) {
  newtemp = ((temp*1.8)+32);
  return Math.round(newtemp*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
