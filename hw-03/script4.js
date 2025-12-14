let student = {
    name: "Владимир",
    age: 23,
    courses: ["Физика", "Математика"],
    address: {
        city: "Зеленоград",
        number: 10,
    },
};

student.courses.push("JavaScript");
student.courses.shift();

student.grades = {
    Математика: 5,
    JavaScript: 5,
};

console.log("Информация о студенте:");
console.log("----------------------");
console.log(`Имя: ${student.name}`);
console.log(`Возраст: ${student.age}`);
console.log(`Город: ${student.address.city}`);
console.log(`Дом: ${student.address.number}`);
console.log(`Изучаемые курсы: ${student.courses.join(", ")}`);
console.log("Оценки по курсам:");
console.log(student.grades);
