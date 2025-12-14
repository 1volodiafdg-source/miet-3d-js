function checkAge(age) {
    if (age < 18) {
        return "Доступ запрещён: возраст меньше 18 лет.";
    } else if (age <= 59) {
        return "Доступ разрешён: добро пожаловать!";
    } else {
        return "Доступ разрешён: добро пожаловать! Особые привилегии.";
    }
}

function getDiscount(totalAmount) {
    if (totalAmount < 1000) {
        return 0;
    } else if (totalAmount <= 5000) {
        return 5;
    } else {
        return 10;
    }
}

function greetUser(name, age) {
    return `Привет, ${name}! ${checkAge(age)}`;
}

console.log(checkAge(17));
console.log(checkAge(23));
console.log(checkAge(65));

console.log("Скидка:", getDiscount(500), "%");
console.log("Скидка:", getDiscount(3000), "%");
console.log("Скидка:", getDiscount(7000), "%");

console.log(greetUser("Владимир", 23));
