//É bem comum esquecermos a regra acima, principalmente no uso de loops

'use strict'

var object = {
    name: 'Matheus',
    friends: ['Joao', 'Ana'],
    loop: function() {
        this.friends.forEach(function(friend) {
            console.log(this.name + ' knows ' + friend)
        })
    }
}

object.loop()
// TypeError: Cannot read property 'name' of undefined