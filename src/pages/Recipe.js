import {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Recipe = () => {

  const [recipeInfo, setRecipeInfo] = useState('')

  let params = useParams();
  
  const getRecipeInfo = () => {
    const axios = require('axios');


    console.log(`PARAM PARAM NAME!!!!!: ${params.name}`)
    const options = {
      
      method: 'GET',
      url: `http://localhost:8000/recipe`,
      
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
        
      },
      params: {
        id: `${params.name}`,
      },
    };
    axios
      .request(options)
      .then((response) => {
        // console.log('LOOK HERE : ', response.data.results);
        setRecipeInfo(response.data);

        
        console.log('RECIPE INFO, response: ', response);
        console.log('RECIPE INFO ACTUAL: ', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getRecipeInfo();
    console.log(params.name);
  }, [params.name]);
  


  return (
    <RecipeStyled>
        {recipeInfo.title}
    </RecipeStyled>
  )
}


const RecipeStyled = styled.section`

`

export default Recipe