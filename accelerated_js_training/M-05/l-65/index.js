//65. Creating Properties with defineProperty()

var account = {
    cash: 12000,
    _name: 'Default',
    withdraw: function(amount) {
        this.cash -= amount
        console.log('withdraw ' + amount + ', new cash reserve is: ' + this.cash)
    }
}

Object.defineProperty(account, 'name', {
    get: function() {
        return account
    },
    set: function(name) {
        if(name == 'Max') {
            this._name = name
        }
    }
})

console.log(account.name)
account.name = '1D000-3'

console.log(account.name)
console.log(account._name)