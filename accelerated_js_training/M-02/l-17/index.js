// 0 == false
// 1 == true
// 2 or -1 or anything == true
// 'text' == true
// null == false 

var condition = 1
var anotherCondition = true

if (condition) {
    console.log('Executed!')
} else if (anotherCondition) {
    console.log('Still Executed!')
} else {
    console.log('Not executed!')
}