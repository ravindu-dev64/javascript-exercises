const removeFromArray = function() {
    let arr = arguments[0];
    for (let i = 1; i < arguments.length; i++){
        let remVal = arguments[i];
        if (arr.includes(remVal)){
            while (true) {
                let inde = arr.indexOf(remVal);
                arr.splice(inde, 1);
                if (!arr.includes(remVal)) break;
            }
        }
    }
    return arr;
};

/* solution code --> instead of removing from original...
creating a new array by adding other items from
original array---------------*/

// Do not edit below this line
module.exports = removeFromArray;
