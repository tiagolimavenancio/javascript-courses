const greeting = greet => name => greet + ' ' + name;
const hello = greeting('Hello');

hello('World'); // Hello World
hello('Matheus'); // Hello Matheus