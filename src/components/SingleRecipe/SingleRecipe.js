import React, { useEffect, useState } from 'react';
import classes from './SingleRecipe.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faStar,
  faStopwatch,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';
import axios from '../../axios/axiosSpoonacular';
import ReactHtmlParser from 'react-html-parser';
import Spinner from '../../components/Spinner/Spinner';

const SingleRecipe = props => {
  const { id } = props.match.params;
  const [recipe, setRecipe] = useState({});
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    axios
      .get(`/${id}/information`)
      .then(res => {
        const {
          summary,
          title,
          readyInMinutes,
          image,
          servings,
          spoonacularScore,
          healthScore,
        } = res.data;

        setRecipe({
          summary,
          title,
          readyInMinutes,
          image,
          servings,
          spoonacularScore,
          healthScore,
        });
        setloading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.Center}>
          <button className={classes.Button} onClick={props.history.goBack}>
            Back
          </button>
          <div className={classes.SingleRecipe}>
            <div className={classes.ImgContainer}>
              <img src={recipe.image} alt={recipe.title} />
              <span className={classes.Likes}>
                <FontAwesomeIcon icon={faThumbsUp} />
                {recipe.healthScore}
              </span>
            </div>
            <div className={classes.SingleRecipeCenter}>
              <h2>{recipe.title}</h2>
              <hr />
              <div className={classes.Content}>
                <div className={classes.Info}>
                  <div className={classes.InfoBlock}>
                    <span className={classes.InfoBlockIcon}>
                      <FontAwesomeIcon icon={faStopwatch} />
                      <span>{recipe.readyInMinutes}</span>
                    </span>
                    Ready
                  </div>
                  <div className={classes.InfoBlock}>
                    <span className={classes.InfoBlockIcon}>
                      <FontAwesomeIcon icon={faUsers} />
                      <span>{recipe.servings}</span>
                    </span>
                    Servings
                  </div>
                  <div className={classes.InfoBlock}>
                    <span className={classes.InfoBlockIcon}>
                      <FontAwesomeIcon icon={faStar} />
                      <span>{recipe.healthScore}</span>
                    </span>
                    Rating
                  </div>
                </div>
                <p className={classes.Summary}>
                  {ReactHtmlParser(recipe.summary)}
                </p>
                <div className={classes.DishTypes}>
                  <span>Lunch</span>
                  <span>Main Course</span>
                  <span>Dinner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleRecipe;
