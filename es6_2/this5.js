//Uma forma fácil de corrigir esse problema é simplesmente guardar o valor do this em uma variável e ao invés de chamar o this, chamar essa variável

var self = this;
loop: function() {
    this.friends.forEach(function(friend) {
        console.log(self.name + ' knows ' + friend);
    });
}