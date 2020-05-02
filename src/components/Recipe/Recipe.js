import React from 'react';
import classes from './Recipe.module.css';

const Recipe = ({ recipe }) => {
  const { title, img, ready, servings } = recipe;
  return (
    <div className={classes.Box}>
      <div className={classes.ImageContainer}>
        <img
          src={`https://spoonacular.com/recipeImages/${img}`}
          alt={img}
          className={classes.Image}
        />
      </div>
      <div className={classes.Content}>
        <span className={classes.Ready}>{ready}m</span>
        <h4>{title}</h4>
        <span>servings: {servings}</span>
        <a className={classes.Details} href="#">
          details
        </a>
      </div>
    </div>
  );
};

export default Recipe;
