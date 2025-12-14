function getWordLengths(words) {
    return words.map((word) => word.length);
}

const fruits = ["груша", "киви", "мандарин"];
const lengths = getWordLengths(fruits);

console.log(lengths);
