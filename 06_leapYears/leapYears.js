const leapYears = function (year) {
    const isMultipleOf4 = year % 4 === 0;
    const isMultipleOf100 = year % 100 === 0;
    const isMultipleOf400 = year % 400 === 0;

    return isMultipleOf4 && (!isMultipleOf100 || isMultipleOf400);
};

// Do not edit below this line
module.exports = leapYears;
