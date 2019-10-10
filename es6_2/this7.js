// Quando um método está na prototype chain de um objeto, o this desse método vai se referir ao objeto que o está chamando, mesmo se o método não estiver definido nesse objeto

var object = {
    func: function () {
        return this.name
    }
}

var anotherObject = Object.create(object)
anotherObject.name = 'Matheus'

document.write(anotherObject.func()) //Matheus