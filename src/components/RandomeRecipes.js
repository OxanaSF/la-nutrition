import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const recipeTag = 'vegetarian,dessert';

const RandomeRecipes = () => {
  const [randomRecipesNum, setRandomeRecipesNum] = useState('20');
  const [recipeTag, setRecipeTag] = useState('');
  const [randomRecipes, setRandomRecipes] = useState([]);

  useEffect(() => {
    getRandomRecipes();
  }, []);

  const getRandomRecipes = () => {
    const check = localStorage.getItem('randomRecipes');
    if (check) {
      setRandomRecipes(JSON.parse(check));
    } else {
      const axios = require('axios');

      const options = {
        method: 'GET',
        url: 'http://localhost:8000/recipes',
        params: { tags: recipeTag, number: randomRecipesNum },
      };

      axios
        .request(options)
        .then((response) => {
          localStorage.setItem(
            'randomeRecipes',
            JSON.stringify(response.data.recipes)
          );
          setRandomRecipes(response.data.recipes);

          console.log('RANDOME RECIPES: ', response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <div>
      <RandomRecipesStyled>
        <h1>Randome Recipes:</h1>

        <Splide
          options={{
            arrows: false,
            pagination: false,
            drag: 'free',
            gap: '5ram',
          }}
        >
          {randomRecipes.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <CardStyled>
                  <img src={recipe.image} alt={recipe.title} />
                  <h3>{recipe.title}</h3>
                  <div className="description">
                    <p>
                      Gluten free: {recipe.glutenFree === false ? 'NO' : 'YES'}
                    </p>
                    <p>
                      Dairy free: {recipe.dairyFree === false ? 'NO' : 'YES'}
                    </p>
                    <p>
                      Vegetarian: {recipe.vegetarian === false ? 'NO' : 'YES'}
                    </p>
                    <p>
                    Vegan: {recipe.vegan === false ? 'NO' : 'YES'}
                    </p>
                  </div>
                </CardStyled>
              </SplideSlide>
            );
          })}
        </Splide>
      </RandomRecipesStyled>
    </div>
  );
};

const RandomRecipesStyled = styled.section`
  margin: 4rem 0rem;
`;
const CardStyled = styled.div`
  height: 35rem;
  width: 21rem;
  border: 1px solid #e6e6e6;
  overflow: hidden;
  margin: 1rem;
  border-radius: 0.2rem;
  padding: 0.3rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 400;
    text-align: left;
  }

  p {
    font-weight: 300;
  }

  img {
    height: 70%;
    object-fit: cover;
    width: 100%;
  }
`;

export default RandomeRecipes;
