const leapYears = function(yr) {
    if ((yr%400===0)||(yr%4===0)&&(yr%100!==0)){
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
