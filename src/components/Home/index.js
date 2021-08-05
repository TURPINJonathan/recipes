import React from 'react';

import RecipeSmall from './RecipeSmall';

import './home.scss';

const Home = () => (
  <div className="home">
    <p>Bienvenue sur mon site de recettes. Régalez-vous !</p>
    <div className="recipes-small">
      <RecipeSmall />
      <RecipeSmall />
    </div>
  </div>
);

export default Home;
