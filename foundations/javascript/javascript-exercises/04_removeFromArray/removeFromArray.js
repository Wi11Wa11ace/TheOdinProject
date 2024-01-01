const removeFromArray = function(array, ...args) {
    let arr = array;
    
    for (let i = 0; i < args.length; i++){ 
        if(arr.indexOf(args[i]) !== -1) {
            let index = arr.indexOf(args[i]);
            arr.splice(index, 1);
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
