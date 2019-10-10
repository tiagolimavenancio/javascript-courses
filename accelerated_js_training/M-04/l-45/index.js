//45. Working with Elements: Push, Pop, 
// Unshift and Shift

//Push and pop do NOT make the array shift sideways 
//(because they add and remove items at the end).

//push(): Add items to the end of an array
let cats = ['Bob'];
cats.push('Willy'); // ['Bob', 'Willy']
cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

//pop(): Remove an item from the end of an array
let cats = ['Bob', 'Willy', 'Mini'];
cats.pop(); // ['Bob', 'Willy']


//Unshift and shift make the whole array shift sideways 
//(by adding and removing items from the beginning).
//shift(): Remove an item from the beginning of an array
let cats = ['Bob'];
cats.push('Willy'); // ['Bob', 'Willy']
cats.push('Puff', 'George'); // ['Bob', 'Willy', 'Puff', 'George']

//unshift(): Add items to the beginning of an array
let cats = ['Bob'];
cats.unshift('Willy'); // ['Willy', 'Bob']
cats.unshift('Puff', 'George'); // ['Puff', 'George', 'Willy', 'Bob']
