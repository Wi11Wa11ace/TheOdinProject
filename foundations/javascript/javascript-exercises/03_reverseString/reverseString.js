const reverseString = function(string) {
    let arr = [];
    let str = '';
    for(let i = 0; i < string.length; i++) {
        arr.push(string[i]);
    }

    for(let i = arr.length-1; i >= 0; i--) {
        str += arr[i];
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
