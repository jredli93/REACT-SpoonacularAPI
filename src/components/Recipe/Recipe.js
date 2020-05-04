import React from 'react';
import classes from './Recipe.module.css';
import { Link } from 'react-router-dom';

const Recipe = ({ recipe }) => {
  const { title, img, ready, servings, id } = recipe;
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
        <Link className={classes.Details} to={`/recipe/${id}`}>
          details
        </Link>
      </div>
    </div>
  );
};

export default Recipe;
