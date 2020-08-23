// 4. Write a JavaScript program to find the most frequent item of an array
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )
// Sample Output : 3 ( 4 times )

const io = require('console-read-write');

async function main() {
    io.write("Enter list of items in your array, the items are seperated by a space character:")
    const input = await io.read();
    const arr = input.split(' ');
    io.write("Your array:");
    io.write(arr);
    const uniqueItems = [...new Set(arr)];
    const frequency = uniqueItems.map(item => {
        let count = 0;
        arr.forEach(element => {
            if (item === element) {
                count += 1;
            }
        });
        return { item: item, count: count };
    });
    io.write('Output:');
    io.write('Frequent items:')
    io.write(frequency.sort((ele1, ele2) => ele2.count - ele1.count));
    const resultItem = frequency.sort((ele1, ele2) => ele2.count - ele1.count)[0];
    io.write('The item with the most occurrences:')
    io.write(resultItem.item + ' ( ' + resultItem.count + ' times )');
}

main();