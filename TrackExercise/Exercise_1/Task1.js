// 1 Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

const io = require('console-read-write');

async function main(){
    io.write('Enter list of colors - seperated by 1 space character:')
    const input = await io.read();
    const myColor = input.split(" ");
    io.write(myColor);
    io.write('Output:');
    io.write(myColor.join());
    io.write(myColor.join(','));
    io.write(myColor.join('+'));
}

main();