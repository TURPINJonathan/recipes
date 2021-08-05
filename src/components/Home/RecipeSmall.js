import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeSmall = ({
  title,
  thumbnail,
  difficulty,
  id,
}) => (
  <article className="recipe-small">
    <img
      src={thumbnail}
      alt=""
    />
    <div className="recipe-small-content">
      <h2>{title}</h2>
      <p>Difficulté : {difficulty}</p>
      <Link
        className="recipe-small-link"
        to={`/recipe/${id}`}
      >
        Voir la recette
      </Link>
    </div>
  </article>
);

RecipeSmall.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  difficulty: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default RecipeSmall;
