//63. The "this" Keyword and why it might behave strangely

function fn() {
    console.log(this)
}

var obj = {
    obfn: fn
}

var person = { 
    name: 'Max'
}

obj.obfn.bind(person)() // Object Person