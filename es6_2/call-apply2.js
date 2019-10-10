var myself = { age: 26 }

function isOlderThan() {
    for (var i=0; i < arguments.length; i++) {
        console.log(this.age < arguments[i])
    }
}

isOlderThan.call(myself, 30, 40, 15)
// true true false
isOlderThan.apply(myself, [30, 40, 15])
// true true false