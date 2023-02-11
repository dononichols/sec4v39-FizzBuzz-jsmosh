// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// NOT Divisible by 3 or 5 => input

const output = fizzBuzz(10);
console.log(output);


function fizzBuzz(input) {
    if (typeof input !== 'number')
        return 'Not a number'; // or NaN

    if ((input % 3 === 0) && (input % 5 === 0))
        return 'FizzBuzz';

    if (input % 3 === 0)
        return 'Fizz';

    if (input % 5 === 0)
        return 'Buzz';

    return input;
}