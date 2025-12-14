function printNumberedLines(lines) {
    lines.forEach((line, index) => {
        console.log(`${index + 1}. ${line}`);
    });
}

const greetings = ["Привет", "Как дела?", "До свидания"];
printNumberedLines(greetings);
