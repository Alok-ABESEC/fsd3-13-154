
const toWords = (digit) =>{
    switch(digit){
case 1:
    return "one";
case 2:
    return "two";
case 3:
    return "three";
case 4:
    return "four";
case 5:
    return "five";
case 6:
    return "six";
case 7:
    return "seven";
case 8:
    return "eight";
case 9:
    return "nine";
case 0:
    return "zero";
default:
    return "";
    }
    };

// console.log(toWords(6));
const rollNum ="2503201000154";
const digits =String(rollNum).split("");
console.log(digits);
let inWords = "";
 digits.forEach((d) => {
    inWords += " " + toWords(Number(d));
 });
console.log(inWords);