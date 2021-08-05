// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

// == Import : local
// Composants
import Header from './Header';
import Ingredients from './Ingredients';
import Instructions from './Instructions';

// Style
import './styles.css';

// == Composant
function Recipe({ recipes }) {
  const { id } = useParams(); // => string

  const recipe = recipes.find((item) => item.id === parseInt(id,10)); // convert string
  return (
    <div className="recipe">
      <Header
        name={recipe.title}
        thumbnail={recipe.thumbnail}
        author={recipe.author}
        difficulty={recipe.difficulty}
      />
      <Ingredients
        list={recipe.ingredients}
      />
      <Instructions
        steps={recipe.instructions}
      />
    </div>
  );
}

Recipe.propTypes = {
  recipes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
      ingredients: PropTypes.array.isRequired,
      instructions: PropTypes.array.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Recipe;
