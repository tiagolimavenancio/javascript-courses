//Uma outra abordagem para a criação de uma closure, é basicamente criar uma função dentro de outra

function init() {
    var name = 'Matheus'
    function hello() {
        console.log('Olá: ' + name)
    }
    hello();
}

init();
// Olá: Matheus

hello();
// Uncaught ReferenceError: hello is not defined(…)
