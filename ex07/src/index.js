function main(numOne, numTwo){

    // only change code below this line 

    var numOne = numOne;
    var numTwo = numTwo;
    var remainder = numOne % numTwo;
    
    // Only change code above this lineno

    return remainder;
}

console.log(main(5, 2)); // change this line
console.log(main(15, 4));
console.log(main(102, 25));

module.exports = main;