// Task 2.1 — Создание класса Book

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `${this.title} была написана ${this.author} в ${this.year} году.`;
    }
}

const book1 = new Book("Война и мир", "Лев Толстой", 1869);
const book2 = new Book("Анна Каренина", "Лев Толстой", 1877);

console.log(book1.getSummary());

// Task 2.2 — Наследование классов (Magazine)

class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }

    getSummary() {
        return `${this.title} была написана ${this.author} в ${this.year} году. Месяц издания: ${this.month}.`;
    }
}

const mag1 = new Magazine(
    "National Geographic",
    "National Geographic Society",
    1888,
    "Июль"
);

console.log(mag1.getSummary());

// Task 2.3 — Методы (static compareAge)

Book.compareAge = function (bookA, bookB) {
    if (bookA.year < bookB.year) {
        return `${bookA.title} была издана раньше, чем ${bookB.title}.`;
    } else if (bookA.year > bookB.year) {
        return `${bookB.title} была издана раньше, чем ${bookA.title}.`;
    } else {
        return `Обе книги были изданы в ${bookA.year} году.`;
    }
};

console.log(Book.compareAge(book1, book2));
