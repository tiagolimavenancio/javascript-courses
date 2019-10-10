//Enquanto bind retorna uma nova função que quando for executada terá o contexto que passamos

var person = { 
    name: "Matheus",
    hello: function(thing) {
        console.log(this.name + " disse Olá " + thing)
    }
}

var hello = person.hello.bind(person)
hello("Mundo") // Matheus disse Olá Mundo