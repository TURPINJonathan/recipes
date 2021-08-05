// test file for src/utils/index.js

import { slugifyTitle } from 'src/utils';

import { should } from 'chai';

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
  });
});
