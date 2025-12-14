function filterEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
}

const originalArray = [1, 2, 3, 4, 5, 6];
const evenArray = filterEvenNumbers(originalArray);

console.log(evenArray);
