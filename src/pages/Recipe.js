import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Recipe = () => {
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [ingridients, setIngridients] = useState([]);

  let params = useParams();

  const getRecipeInfo = () => {
    const axios = require('axios');

    // console.log(`PARAM PARAM NAME!!!!!: ${params.name}`);
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
        setRecipeInfo(response.data)
        setIngridients(response.data.extendedIngredients);
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
      <div className="recipe-title">
        <h1>{recipeInfo.title}</h1>
      </div>
      <div></div>
      <div className="recipe-main">
        <div className="ingredients">
          <h3>Ingridients</h3>
          <div>
            {ingridients.map((item) => {
              return (
                <ul key={item.id}>
                  <li>{item.nameClean}</li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="directions">
          <h3>Directions</h3>
          <p>{recipeInfo.instructions}</p>
          <img src={recipeInfo.image} alt={recipeInfo.title} />
        </div>
      </div>
    </RecipeStyled>
  );
};

const RecipeStyled = styled.section`
  margin: 7rem 15%;
  padding: 5% 7%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  h3 {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 0.1rem;
    margin-bottom: 2.5rem;
  }

  .recipe-title {
    border-bottom: 1px solid;
  }
  h1 {
    width: 60%;
    font-size: 1.8rem;
    text-align: left;
    text-transform: uppercase;
    font-weight: 300;
  }

  .recipe-main {
    min-height: 40rem;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;

    .directions {
      p {
        margin-bottom: 4rem;
        letter-spacing: 0.1rem;
        line-height: 1.8;
      }

      img {
        width: 100%;
      }
    }
  }
`;

export default Recipe;
