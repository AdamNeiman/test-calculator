// src/parser.js
class Parser {
    static parse(expression) {
        // Удаляем пробелы
        expression = expression.replace(/\s+/g, '');

        // Разбиваем выражение на токены
        const tokens = [];
        let numberBuffer = [];

        const flushNumberBuffer = () => {
            if (numberBuffer.length) {
                tokens.push(numberBuffer.join(''));
                numberBuffer = [];
            }
        };

        for (const char of expression) {
            if ('0123456789.'.includes(char)) {
                numberBuffer.push(char);
            } else if ('+-*/()'.includes(char)) {
                flushNumberBuffer();
                tokens.push(char);
            } else {
                throw new Error(`Invalid character: ${char}`);
            }
        }

        flushNumberBuffer();
        return tokens;
    }
}

module.exports = Parser;