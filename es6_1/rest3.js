const sum = (...numbers) =>
    numbers.reduce((acc, current) => acc + current, 0)

sum(1,2,3,4,5) // 15