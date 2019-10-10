
//A herança em JavaScript é feita através dos prototypes.
//E quando um objeto tenta acessar qualquer propriedade sua e não a encontrar, ela procurará no seu prototype. E se não estiver lá, no prototype de seu prototype até que a propriedade seja encontrada ou então essa corrente, chamada de Prototype Chain

var Animal = {
    walk: function() {
        console.log("I´m walking...")
    }
}

var Dog = Object.create(Animal)

Animal.walk()
Dog.walk()

var Airplane = {
    fly: function() {
        console.log("I´m flying...")
    }
}

Airplane.walk(); // Uncaught TypeError: Airplane.walk is not a function(…)