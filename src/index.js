// src/index.js
const Parser = require('./parser');
const Evaluator = require('./evaluator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const evaluator = new Evaluator();

rl.question('Введите математическое выражение: ', (expression) => {
    try {
        const tokens = Parser.parse(expression);
        const result = evaluator.evaluate(tokens);
        console.log(`Результат: ${result}`);
    } catch (error) {
        console.error(`Ошибка: ${error.message}`);
    }
    rl.close();
});
