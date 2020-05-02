import React from 'react';
import classes from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  return (
    <div className={classes.Box}>
      <div className={classes.ImageContainer}>
        <img
          src={`https://spoonacular.com/recipeImages/${recipe.img}`}
          alt={recipe.img}
          className={classes.Image}
        />
      </div>
      <div className={classes.Content}>
        <span className={classes.Ready}>45min</span>
        <label>title: {recipe.title}</label>
      </div>
    </div>
  );
};

export default Recipe;
