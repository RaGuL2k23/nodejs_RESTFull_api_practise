import { describe, it } from 'mocha';
import { expect } from 'chai';
import {
  getDataTypes,
  sumUsingForLoop,
  sumUsingWhileLoop,
  isPositive,
  isEven,
  containsSubstring
} from '../basic.js'; // Adjust the path if necessary

describe('Basic JavaScript Functions', () => {

  it('should return correct data types', () => {
    const { number, string, array, object } = getDataTypes();
    expect(number).to.be.a('number');
    expect(string).to.be.a('string');
    expect(array).to.be.an('array');
    expect(object).to.be.an('object');
  });

  it('should correctly sum numbers from 1 to 5 using a for loop', () => {
    const sum = sumUsingForLoop(5);
    expect(sum).to.equal(15);
    const sum2 = sumUsingForLoop(6);
    expect(sum2).to.equal(21);
  });

  it('should correctly sum numbers from 1 to 5 using a while loop', () => {
    const sum = sumUsingWhileLoop(5);
    expect(sum).to.equal(15);
    const sum2 = sumUsingForLoop(6);
    expect(sum2).to.equal(21);
  });

  it('should check if a number is positive', () => {
    const result = isPositive(10);
    expect(result).to.be.true;
  });

  it('should check if a number is even or odd', () => {
    const result = isEven(4);
    expect(result).to.equal('even');
    const result2 = isEven(5);
    expect(result2).to.equal('odd');
  });

  it('should check if a string contains a specific substring', () => {
    const result = containsSubstring('hello world', 'world');
    expect(result).to.be.true;
  });

});
