// tests file for the recipes's reducer

import { expect } from 'chai';

import recipesReducer from '../../src/reducers/recipesReducer';

import { saveRecipes } from '../../src/actions/recipes';

import recipesData from '../data/recipes';

describe('recipesReducer', () => {
  it('is a function', () => {
    expect(recipesReducer).to.be.a('function');
  });

  it('test initial state', () => {
    const expectedInitialState = {
      recipesList: [],
    };

    const realInitialState = recipesReducer();
    // console.log(realInitialState);

    expect(realInitialState).to.deep.equal(expectedInitialState);
  });

  it('check treatment of action SAVE_RECIPES', () => {
    const stateBefore = {
      recipesList: [],
    };

    const action = saveRecipes(recipesData);

    const expectedStateAfter = {
      recipesList: recipesData,
    };

    const stateAfter = recipesReducer(stateBefore, action);

    expect(stateAfter).to.deep.equal(expectedStateAfter);
  });
});
