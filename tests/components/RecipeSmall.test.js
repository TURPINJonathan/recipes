import React from 'react';

import { expect } from 'chai';

import { shallow } from 'enzyme';

import { Link } from 'react-router-dom';

import RecipeSmall from '../../src/components/Home/RecipeSmall';

describe('<RecipeSmall />', () => {
  it('Uses the title given as prop', () => {
    const titleValue = 'pizza';

    const wrapper = shallow(<RecipeSmall title={titleValue} thumbnail="img.png" difficulty="facile" />);

    const h2Elements = wrapper.find('h2');
    expect(h2Elements).to.have.lengthOf(1);

    expect(h2Elements.text()).to.equal(titleValue);
  });

  it('has a link towards the recipe', () => {
    const titleValue = 'pizza margherita';
    const slug = 'pizza-margherita';

    const wrapper = shallow(<RecipeSmall title={titleValue} thumbnail="img.png" difficulty="facile" />);

    const linkElements = wrapper.find(Link);
    expect(linkElements).to.have.lengthOf(1);

    // console.log(linkElements.props());
    expect(linkElements.props()).to.have.property('to', `/recipe/${slug}`);
  });
});
