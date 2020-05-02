import React, { useState } from 'react';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import axios from './axios/axiosSpoonacular';
import RecipeList from './components/RecipeList/RecipeList';

function App() {
  const [search, setSearch] = useState('');
  const [recipes, setRecipes] = useState([]);

  const searchHandler = event => {
    setSearch(event.target.value);
  };

  // dodaj u state rezultat GET-a

  const submitHandler = event => {
    event.preventDefault();
    if (search !== '') {
      axios
        .get('/search', {
          params: {
            query: search,
          },
        })
        .then(res => {
          res.data.results.map(recipe => {
            setRecipes(prevState => {
              return [
                ...prevState,
                {
                  id: recipe.id,
                  title: recipe.title,
                  img: recipe.image,
                  servings: recipe.servings,
                  ready: recipe.readyInMinutes,
                },
              ];
            });
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  return (
    <div className="center">
      <div className="wrap">
        <form style={{ display: 'flex' }} onSubmit={submitHandler}>
          <Input value={search} changed={searchHandler} />
          <Button />
        </form>
      </div>

      <div className="recipe-results">
        {recipes ? <RecipeList recipes={recipes} /> : null}
      </div>
    </div>
  );
}

export default App;
