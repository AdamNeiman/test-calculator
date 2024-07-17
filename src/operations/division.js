// src/operations/division.js
class Division {
    static get symbol() {
        return '/';
    }

    static operate(a, b) {
        if (b === 0) {
            throw new Error("Division by zero");
        }
        return a / b;
    }
}

module.exports = Division;