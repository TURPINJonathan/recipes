import React from 'react';

// import Recipe from 'src/components/Recipe';
import Home from 'src/components/Home';

// import recipes from 'src/data';

import './page.scss';

const Page = () => (
  <main className="page">
    <h2 className="page-title">oRecipes</h2>
    <div className="page-content">
      { /* Accueil ou détail d'une recette */ }
      { /* <Recipe recipe={recipes[0]} /> */ }
      <Home />
    </div>
  </main>
);

export default Page;
