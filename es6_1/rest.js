var sum = function() {
    var result = 0;
    for (var i=0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
}
sum(1,2,3,4,5); // 15