function sum(...numbers) {
    let result = 0
    numbers.forEach((number) => {
        result += number
    })
    return result
}

sum(1,2,3,4,5) //15