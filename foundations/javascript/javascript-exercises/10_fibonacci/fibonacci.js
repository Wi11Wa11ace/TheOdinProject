const fibonacci = function(num) {

    num = parseInt(num);

    if (num < 0) return "OOPS";
    if (num == 0) return 0;
    if (num == 1 || num == 2) return 1;

    let first = 1, second = 1, current;
    
    for(let i = 2; i < num; i++) {
        current = first + second;
        first = second;
        second = current;
    }

    return current;
};

// Do not edit below this line
module.exports = fibonacci;
