// src/operations/multiplication.js
class Multiplication {
    static get symbol() {
        return '*';
    }

    static operate(a, b) {
        return a * b;
    }
}

module.exports = Multiplication;