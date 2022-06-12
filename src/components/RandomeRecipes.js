import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const recipeTag = 'vegetarian,dessert'

const RandomeRecipes = () => {
  const [randomRecipesNum, setRandomeRecipesNum] = useState('20')
  const [recipeTag, setRecipeTag] = useState('vegetarian,dessert')



  const getRandomRecipes = () => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/recipes',
      params: { tags: recipeTag, number: randomRecipesNum },
     
    };

    axios
      .request(options)
      .then((response) => {
        console.log('RANDOME RECIPES: ', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Randome Recipes</h1>
      <button onClick={getRandomRecipes}>Get Randome Recipes</button>
    </div>
  );
};

export default RandomeRecipes;
