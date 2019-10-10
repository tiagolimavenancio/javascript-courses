//84. Regular Expressions

var string = 'ababc'
var pattern = /ab/
console.log(pattern.exec(string))
console.log(pattern.test(string))
console.log(string.match(pattern))