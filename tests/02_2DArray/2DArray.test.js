/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const {
  twoDArray,
} = require('./2DArray');

describe('twoDArray', () => {
  after(() => {
    spy.restore('flat');
  });
  it('is a function', () => {
    expect(typeof twoDArray).to.equal('function');
  });

  it('returns an array', () => {
    const arr = [
      [1, 2, 3],
      [4, 5],
      [6, 7, 8, 9],
    ];

    const returnedValue = twoDArray(arr);
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the correct flat array when a 2D array is passed', () => {
    expect(twoDArray([
      [1, 2],
      [8, 9],
    ])).to.equal(20);

    expect(twoDArray([
      [7, 6],
      [5, 4],
      [3, 2],
    ])).to.equal(27);
  });

  it('does not call Array.prototype.flat', () => {
    expect(twoDArray([
      [7, 7],
      [5, 4],
      [3, 5],
    ])).to.equal(31);

    spy = sinon.spy(Array.prototype, 'flat');
    const returnedValue = twoDArray([
      [1, 3],
      [2, 4],
      [9, 0],
    ]);

    expect(returnedValue).to.deep.equal(19);
    sinon.assert.notCalled(spy);
  });
});
