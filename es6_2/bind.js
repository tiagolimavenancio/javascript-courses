// O bind é muito semelhante ao call e apply: serve para passarmos um contexto para uma função, que não é dela, e podermos executá-la. A diferença é que call e apply invocam a função imediatamente

var person = {
    name: 'Matheus',
    hello: function(thing) {
        console.log(this.name + ' disse Olá ' + thing)
    }
}

person.hello.call(person, 'Mundo') // Matheus disse Olá Mundo