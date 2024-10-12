const sumAll = function (a, b) {
    let result = 0;
    let start;
    let end;

    if (!Number.isInteger(a) || a < 0 || !Number.isInteger(b) || b < 0) {
        return "ERROR";
    }

    if (a <= b) {
        start = a;
        end = b;
    } else {
        start = b;
        end = a;
    }

    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
