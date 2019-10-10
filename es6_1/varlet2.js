for (var i = 0; i < 5; i++) {
    /* do something */
}

for (let j = 0; j < 5; j++) {
    /* do something else */
}

console.log(i); // 5
console.log(j); // Uncaught ReferenceError: j is not defined