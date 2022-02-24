module.exports = function toReadable (number) {
    let mas = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'hundred'
    ]

    const teen = [
        "null",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const twenty_ninety = [
        "null",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const numStr = number.toString();
    const numLeng = numStr.length;

    if (number < 10) {
        return mas[number];
    }

    if (numLeng === 2) {
        if (10 < number && number < 20) {
            return teen[numStr[1]];
        } else if (9 < number && number < 91 && numStr[1] === "0") {
            return twenty_ninety[numStr[0]];
        }
        return `${twenty_ninety[numStr[0]]} ${mas[numStr[1]]}`;
    } else if (numLeng === 3) {
        if (numStr[1] === "0" && numStr[2] === "0") {
            return `${mas[numStr[0]]} hundred`;
        } else if (numStr[1] === "0") {
            return `${mas[numStr[0]]} hundred ${mas[numStr[2]]}`;
        } else if (numStr[2] === "0") {
            return `${mas[numStr[0]]} hundred ${twenty_ninety[numStr[1]]}`;
        } else if (numStr[1] === "1" && Number(numStr[2]) > 0) {
            return `${mas[numStr[0]]} hundred ${teen[numStr[2]]}`;
        }
        return `${mas[numStr[0]]} hundred ${twenty_ninety[numStr[1]]} ${
            mas[numStr[2]]
        }`;
    }
}



 