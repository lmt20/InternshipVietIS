// 3. Write a JavaScript program to sort the items of an array
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, -3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

const io = require('console-read-write');

async function main(){
    io.write("Enter list of numbers in your array, the items are seperated by a space character:")
    const input =await io.read();
    const arr = input.split(' ').map(numChar => parseInt(numChar));
    io.write("Your array:");
    io.write(arr);
    io.write('Output:');
    io.write(arr.sort((a, b) => a-b));
}

main();