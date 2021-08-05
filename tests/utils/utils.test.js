// test file for src/utils/index.js

import { slugifyTitle, getRecipeBySlug } from 'src/utils';

import { should } from 'chai';

import recipesData from '../data/recipes';

should();

describe('utils', () => {
  describe('slugifyTitle', () => {
    it('is a function', () => {
      slugifyTitle.should.be.a('function');
    });

    it('replaces spaces', () => {
      slugifyTitle('pizza aux nouilles').should.equal('pizza-aux-nouilles');
    });

    it('replaces upper case', () => {
      slugifyTitle('Pizza aux Anchois').should.equal('pizza-aux-anchois');
    });
  });

  describe('getRecipeBySlug', () => {
    it('is a function', () => {
      getRecipeBySlug.should.be.a('function');
    });

    it('get the recipe with the given slug', () => {
      const slug = slugifyTitle(recipesData[0].title);
      const expectedResult = recipesData[0];
      getRecipeBySlug(slug, recipesData).should.equal(expectedResult);
    });
  });
});
