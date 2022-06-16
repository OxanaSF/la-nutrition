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
        setRecipeInfo(response.data);
        console.log('LOG!!!!!!!:', response.data)
        setIngridients(response.data.extendedIngredients);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.log(recipeInfo);
  console.log(recipeInfo.sourceName);

  useEffect(() => {
    getRecipeInfo();
    console.log(params.name);
  }, [params.name]);

  return (
    <div>
      <RecipeHeaderStyled>
        <h3>Nutritions Details of This Dish:</h3>
        <FoodIconStyled>
          <img
            src={`${process.env.PUBLIC_URL}/images/diet.png`}
            alt="food details icon"
          />
        </FoodIconStyled>
      </RecipeHeaderStyled>

      <RecipeStyled>
        <div className="recipe-title">
          <h1>{recipeInfo.title}</h1>
        </div>

        <div className="dish-chars">
          <div>PREP, COOK {recipeInfo.readyInMinutes} MIN</div>
          <div>|</div>
          <div>SERVINGS: {recipeInfo.servings}</div>
        </div>

        <div className="recipe-main">
          <div className="ingredients">
            <h3>Ingridients</h3>
            <div className="ingridients-body">
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

        {recipeInfo.sourceName ? (
          <div className="recipe-foot"> From the {recipeInfo.sourceName} </div>
        ) : (
          ''
        )}
      </RecipeStyled>
    </div>
  );
};

const RecipeHeaderStyled = styled.header`
  margin: 4rem 15%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
  font-size: 1.8rem;
  color: #bde6a4;
`;

const FoodIconStyled = styled.div`
  width: 7rem;
  height: 7rem;

  img {
    width: 100%;
    height: 100%;
    border: 3px solid #bde6a4;
    background-color: #bde6a4;
    border-radius: 50%;
    cursor: pointer;
  }
`;

const RecipeStyled = styled.section`
  margin: 4rem 15%;
  padding: 5% 7%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  h3 {
    text-transform: uppercase;
    font-size: 1.7rem;
    font-weight: 300;
    letter-spacing: 0.1rem;
    margin-bottom: 2.5rem;
  }

  .recipe-title {
    padding-bottom: 1rem;
    border-bottom: 1.5px solid #4c4f4c;
  }
  h1 {
    width: 40%;
    font-size: 2rem;
    text-align: left;
    text-transform: uppercase;
    font-weight: 500;
  }

  .dish-chars {
    margin-top: 1rem;
    display: flex;
    letter-spacing: 0.24rem;
    font-size: 1.1rem;
    gap: 2rem;
  }

  .recipe-main {
    min-height: 40rem;
    margin-top: 5rem;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;

    .ingridients-body {
      font-size: 1.2rem;
      line-height: 2;
      font-weight: 300;

      ul {
        list-style-type: none;
      }
    }

    .directions {
      p {
        margin-bottom: 4rem;
        letter-spacing: 0.1rem;
        line-height: 1.8;
        font-size: 0.8rem;
      }

      img {
        width: 100%;
      }
    }
  }

  .recipe-foot {
    padding-bottom: 1rem;
    border-bottom: 1.5px solid #4c4f4c;
  }
`;

export default Recipe;
