var greeting = function(greet) {
    return function(name) {
        return greet + ' ' + name;
    };
};

var hello = greeting('Hello');
hello('World'); // Hello World
hello('Matheus'); // Hello Matheus