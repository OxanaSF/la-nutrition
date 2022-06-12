const PORT = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()


const app = express()

app.use(cors())

app.get('/', (req,res) => {
    res.json('hi, I am backend')
})

app.get('/display', (req,res) => {

  const ingridient = req.query.ingr

  const options = {
    method: "GET",
    url: "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data",
    params: {ingr: ingridient},
    headers: {
    
    'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
    'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
  }
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
      console.log(response.data)
    })
    .catch((error) => {
      console.error(error);
    });
})



app.get('/recipes', (req,res) => {
  const recipeTag = req.query.tags
  const randomRecipesNum = req.query.number

  const options = {
    method: 'GET',
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
    params: { tags: recipeTag, number: randomRecipesNum },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
      'X-RapidAPI-Host':
        'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
    },
  };

  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
      console.log('RANDOME RECIPES: ', response.data);
    })
    .catch((error) => {
      console.error(error);
    });
})





app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
