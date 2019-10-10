function sum(start, ...numbers) {
    let result = start;
    numbers.forEach((number) => {
        result += number
    })
    return result;
}

sum(10, 1,2,3,4,5); // 25