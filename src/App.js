import React from 'react';
import Recipes from './containers/Recipes/Recipes';
import { Route, Switch } from 'react-router-dom';
import SingleRecipe from './components/SingleRecipe/SingleRecipe';

function App() {
  return (
    <Switch>
      <Route path="/recipe/:id" component={SingleRecipe} />
      <Route path="/" component={Recipes} />
      {/* <Route path="*" component={} /> */}
    </Switch>
  );
}

export default App;
