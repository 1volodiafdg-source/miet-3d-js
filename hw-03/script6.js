function greet(name) {
    return `Привет, ${name}!`;
}

function sum(a, b) {
    return a + b;
}

function isEven(number) {
    return number % 2 === 0;
}

function calculateArea(width, height) {
    return width * height;
}

console.log(greet("Владимир"));
console.log("Сумма:", sum(5, 7));
console.log("Чётное число (10):", isEven(10));
console.log("Чётное число (7):", isEven(7));
console.log("Площадь:", calculateArea(5, 8));
