import React from 'react';
import Recipe from '../Recipe/Recipe';

const RecipeList = ({ recipes }) => {
  return (
    <>
      {recipes.map(recipe => {
        return <Recipe key={recipe.id} recipe={recipe} />;
      })}
    </>
  );
};

export default RecipeList;
