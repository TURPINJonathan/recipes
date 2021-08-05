import slugify from 'slugify';

export const slugifyTitle = (title) => {
  const slug = slugify(title, {
    lower: true,
  });

  return slug;
};

/**
 * retrieve the recipe that has the indicated slug
 * @param {String} slug the slug to retrieve
 * @param {Array} recipes all recipes
 * @return the recipe that has the indicated slug
 */
export const getRecipeBySlug = (slug, recipes) => {
  const recipeFound = recipes.find((recipe) => {
    const recipeSlug = slugifyTitle(recipe.title);

    return slug === recipeSlug;
  });

  return recipeFound;
};
