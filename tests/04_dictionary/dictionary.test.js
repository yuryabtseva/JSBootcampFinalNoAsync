/* eslint-disable no-undef */
const { expect } = require('chai');
const { getMeanings, getFirstDefinition } = require('./dictionary');

describe('Dictionary', () => {
  let meaningOminous;
  let firstDefinition;

  before(async () => {
    meaningOminous = await getMeanings('ominous');
    firstDefinition = await getFirstDefinition('procrastination');
    // mealsCategories = await getMealsCategories();
  });
  describe('Write a function getMeaning that takes a word as a parameter and returns the meanings of that word using the dictionary api database', () => {
    it('is a function that calls the dictionary api database', () => {
      expect(typeof getMeanings).to.equal('function');
    });

    it('is a function that calls the dictionary api database and returns the meanings array', async () => {
      expect(Array.isArray(meaningOminous)).to.equal(true);

      expect(meaningOminous[0].synonyms).to.deep.equal([
        'inauspicious',
        'portentous',
        'threatening',
        'portentous',
        'sinister',
        'threatening',
      ]);
    });
  });

  describe('Write a function firstDefinition that takes a word as a parameter and returns the first definition listed in the response', () => {
    it('is a function that calls the dictionary api database', () => {
      expect(typeof getFirstDefinition).to.equal('function');
    });

    it('is a function that calls the dictionary api database and returns the first definition listed for the word passed', async () => {
      expect(typeof firstDefinition).to.equal('string');

      expect(firstDefinition).to.equal('The act of postponing, delaying or putting off, especially habitually or intentionally.');
    });
  });
});
