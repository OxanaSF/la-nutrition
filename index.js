
// const PORT = 8000
// const express = require('express')
// const cors = require('cors')
// const axios = require('axios')

// require('dotenv').config()


// const app = express()

// app.use(cors())




// // API Request to get Recipy Analise

// app.get('/', (req,res) => {
//     res.json('hi, I am backend')
// })

// app.get('/display', (req,res) => {

//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
  
//   console.log('REQ REQ REQ: ', req.query.ingr)
//   const ingridient = req.query.ingr

//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')
//   console.log('**********************')

   
//   const options = {
//     method: "GET",
//     url: "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data",
//     params: {ingr: ingridient},
//     headers: {
    
//     'X-RapidAPI-Host': 'edamam-edamam-nutrition-analysis.p.rapidapi.com',
//     'X-RapidAPI-Key': process.env.REACT_APP_API_KEY
//   }
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data);
//       console.log('DATA DATA DATA: ', response.data)
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// })


// //  API Request to Get Random Recipies

// app.get('/recipes', (req,res) => {
//   const recipeTag = req.query.tags
//   const randomRecipesNum = req.query.number

//   const options = {
//     method: 'GET',
//     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random',
//     params: { tags: recipeTag, number: randomRecipesNum },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data);
//       // console.log('RANDOME RECIPES: ', response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// })


// // API Request to Get List o Recipes of the Chosen Cuisine

// app.get('/cuisine', (req,res) => {
//   // console.log('REQ REQ REQ: ', req.query.cuisine)
//   const cuisine = req.query.cuisine
//   const number = req.query.number

//   const options = {
//     method: 'GET',
//     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
//     params: { cuisine: cuisine, number: number },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data);
//       // console.log('CUISINE!!!: ', response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// })



// // API Request to Get List of Recipes by a Searched Word


// app.get('/searched', (req,res) => {
//   // console.log('REQ REQ REQ: ', req.query.query)
//   const queryName = req.query.query
//   const number = req.query.number

//   const options = {
//     method: 'GET',
//     url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
//     params: { query: queryName, number: number },
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data);
//       // console.log('QUERY!!!!: ', response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// })


// // API Request to Get a Recipe Info by a Recipe id


// app.get('/recipe', (req,res) => {
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
  
//   // console.log('REQ REQ REQ: ', req.query.id)
//   const recipeId = req.query.id

//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')
//   // console.log('**********************')


//   const options = {
//     method: 'GET',
//     url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${recipeId}/information`,
   
//     headers: {
//       'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
//       'X-RapidAPI-Host':
//         'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
//     },
//   };

//   axios
//     .request(options)
//     .then((response) => {
//       res.json(response.data);
//       // console.log('QUERY!!!! ID: ', response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// })


// app.listen(8000, () => console.log(`Server is running on port ${PORT}`))
