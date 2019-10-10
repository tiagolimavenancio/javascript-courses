//75. Immediately Invoked Function Executions (IIFEs)

var obj = {}
(function calc(input) {
    obj.name = 'Max'
})(obj)

console.log(obj)