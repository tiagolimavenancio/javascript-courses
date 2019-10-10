var test = 'Global Scope'

function localScope() {
    var test = 'Local Scope'
    console.log(test)
}

localScope() // Local Score
console.log(test) // Global Scope