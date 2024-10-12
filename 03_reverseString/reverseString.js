const reverseString = function (string) {
    const array = string.split("");
    const reversedArray = array.reverse();
    const result = reversedArray.join("");

    return result;
};

// Do not edit below this line
module.exports = reverseString;
