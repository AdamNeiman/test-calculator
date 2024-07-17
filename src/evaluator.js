// src/evaluator.js
const Addition = require('./operations/addition');
const Subtraction = require('./operations/subtraction');
const Multiplication = require('./operations/multiplication');
const Division = require('./operations/division');

class Evaluator {
    constructor() {
        this.operations = {
            [Addition.symbol]: Addition.operate,
            [Subtraction.symbol]: Subtraction.operate,
            [Multiplication.symbol]: Multiplication.operate,
            [Division.symbol]: Division.operate,
        };
    }

    evaluate(tokens) {
        const outputQueue = [];
        const operatorStack = [];

        const precedence = {
            '+': 1,
            '-': 1,
            '*': 2,
            '/': 2
        };

        const associativity = {
            '+': 'L',
            '-': 'L',
            '*': 'L',
            '/': 'L'
        };

        for (const token of tokens) {
            if (parseFloat(token).toString() === token) {
                outputQueue.push(parseFloat(token));
            } else if (['+', '-', '*', '/'].includes(token)) {
                while (
                    operatorStack.length &&
                    precedence[operatorStack[operatorStack.length - 1]] >= precedence[token] &&
                    associativity[token] === 'L'
                ) {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.push(token);
            } else if (token === '(') {
                operatorStack.push(token);
            } else if (token === ')') {
                while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
                    outputQueue.push(operatorStack.pop());
                }
                operatorStack.pop();
            }
        }

        while (operatorStack.length) {
            outputQueue.push(operatorStack.pop());
        }

        const evaluationStack = [];
        for (const token of outputQueue) {
            if (typeof token === 'number') {
                evaluationStack.push(token);
            } else if (this.operations[token]) {
                const b = evaluationStack.pop();
                const a = evaluationStack.pop();
                evaluationStack.push(this.operations[token](a, b));
            }
        }

        return evaluationStack[0];
    }
}

module.exports = Evaluator;
