// src/operations/subtraction.js
class Subtraction {
    static get symbol() {
        return '-';
    }

    static operate(a, b) {
        return a - b;
    }
}

module.exports = Subtraction;