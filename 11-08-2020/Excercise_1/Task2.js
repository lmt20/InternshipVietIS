// 2. Write a JavaScript program which accept a number as input and insert dashes (-) between each two 
// even numbers.
// **For example if you accept 025468 the output should be 0-2-54-6-8

const io = require('console-read-write');

async function main() {
    io.write('Enter string of numbers:');
    const input = await io.read();
    io.write('Your string of numbers that you entered:');
    io.write(input);
    const numbers = input.split('');
    let tmp = 0;
    const evenNumbers = [];
    numbers.forEach(number => {
        number = parseInt(number);
        tmp = tmp * 10 + number;
        if (number % 2 === 0) {
            evenNumbers.push(tmp);
            tmp = 0;
        }
    });
    io.write("Output:");
    io.write(evenNumbers.join('-'));
}

main();