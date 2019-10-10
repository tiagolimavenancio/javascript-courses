var condition = true
var i = 2

while(condition) {
    if (i == 3){
        condition = false
    }
    console.log(i)
    i++
}

var condition = false
do {
    console.log('Executed!')
} while(condition)