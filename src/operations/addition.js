// src/operations/addition.js
class Addition {
    static get symbol() {
        return '+';
    }

    static operate(a, b) {
        return a + b;
    }
}

module.exports = Addition;
