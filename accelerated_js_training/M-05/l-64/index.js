//64. Handling "this" with bind(), call() & apply()

function fn(message) {
    console.log(message + this)
}

var obj = {
    obfn: fn
}

var person = {
    name: 'Max'
}

obj.obfn.bind(person, 'Hello')()
obj.obfn.call(person, 'Hello')
obj.obfn.apply(person, ['Hello'])
