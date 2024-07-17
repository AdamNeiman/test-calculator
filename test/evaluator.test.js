// test/evaluator.test.js
const chai = require('chai');
const expect = chai.expect;
const Evaluator = require('../src/evaluator');
const Parser = require('../src/parser');

describe('Evaluator', () => {
    const evaluator = new Evaluator();

    it('should evaluate a simple expression', () => {
        const tokens = Parser.parse('3 + 5');
        const result = evaluator.evaluate(tokens);
        expect(result).to.equal(8);
    });

    it('should evaluate an expression with parentheses', () => {
        const tokens = Parser.parse('(3 + 5) * 2');
        const result = evaluator.evaluate(tokens);
        expect(result).to.equal(16);
    });

    it('should evaluate an expression with decimals', () => {
        const tokens = Parser.parse('3.5 * 2.2');
        const result = evaluator.evaluate(tokens);
        expect(result).to.equal(7.7);
    });

    it('should evaluate a complex expression', () => {
        const tokens = Parser.parse('3 + 5 * (2 - 4) / 2');
        const result = evaluator.evaluate(tokens);
        expect(result).to.equal(1);
    });

    it('should throw an error for division by zero', () => {
        const tokens = Parser.parse('3 / 0');
        expect(() => evaluator.evaluate(tokens)).to.throw('Division by zero');
    });
});
