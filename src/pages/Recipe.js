import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Recipe = () => {
  //States related to getRecipeInfo
  const [recipeInfo, setRecipeInfo] = useState([]);
  const [ingridients, setIngridients] = useState([]);
  const [isLoading, setLoading] = useState(true);

  //Stets related to getIngridientsAnalysis
  const [calories, setCalories] = useState(0);
  const [healthLabels, setHealthLabels] = useState(['no labels now']);
  const [nutrients, setNutrients] = useState({
    CA: { label: 'Calcium, Ca', quantity: 42.12, unit: 'mg' },
  });

  const [nutritionsBtn, setNutritionsBtn] = useState(true);
  const [ingridientsText, setIngridientsText] = useState('apple grape pork');

  let params = useParams();

  const recipeDisplayHandler = () => {
    setNutritionsBtn(!nutritionsBtn);
  };

  const getRecipeInfo = () => {
    const axios = require('axios');
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
        console.log('DATA:', response.data);
        console.log('DATA, ARRAY:', response.data.extendedIngredients);
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

  const names = ingridients.map((ingridient) => {
    return ingridient.nameClean;
  });
  console.log('NAMES NAMES NAMES', names);

  //   const text = names.join()
  //   setIngridientsText(text )
  // console.log(names.join())

  // console.log('NAMES_2 NAMES_2 NAMES_2', names2);

  const getIngridientsAnalysis = () => {
    console.log('I AM WORKING!!!!!!');
    setIngridientsText(names.join());
    console.log('INGRIDIENTS: ', ingridientsText);

    const axios = require('axios');

    const options = {
      method: 'GET',
      url: 'http://localhost:8000/display',
      params: { ingr: ingridientsText },
    };

    axios
      .request(options)
      .then((response) => {
        console.log('NUTRIENTS!!!!: ', response.data);
        setCalories(response.data['calories']);
        setHealthLabels(response.data);
        setHealthLabels(response.data['healthLabels']);
        setNutrients(response.data['totalNutrients']);
        // console.log('NUTRIENTS TOTAL: ', response.data['totalNutrients']);
        // console.log(
        //   'NUTRIENTS SUGAR: ',
        //   response.data['totalNutrients']['SUGAR'].label
        // );
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (nutritionsBtn === false) {
      getIngridientsAnalysis();
    }

    console.log('nutritionsBtn', nutritionsBtn);
  }, [nutritionsBtn]);

  return (
    
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      <RecipeHeaderStyled>
        {nutritionsBtn && <h3>Nutrients Analysis of This Dish:</h3>}
        {!nutritionsBtn && <h3>Back to Recipe:</h3>}

        <ButtonStyled onClick={recipeDisplayHandler}>
          <img
            src={`${process.env.PUBLIC_URL}/images/diet.png`}
            alt="food details icon"
          />
        </ButtonStyled>
        
      </RecipeHeaderStyled>

      {nutritionsBtn && (
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
              {! recipeInfo.instructions && <p style={{textAlign: 'center'}}>Recipe Instructions are Not Available at this time.</p>}
              <p>{recipeInfo.instructions}</p>
              <img src={recipeInfo.image} alt={recipeInfo.title} />
            </div>
          </div>

          {recipeInfo.sourceName ? (
            <div className="recipe-foot">
              {' '}
              From the {recipeInfo.sourceName}{' '}
            </div>
          ) : (
            ''
          )}
        </RecipeStyled>
      )}

      {!nutritionsBtn && (
        <NutrientsStyled>
          <div>
            <h1>Nutrients Analysis</h1>
          </div>
          <div>
            {/* <button onClick={getIngridientsAnalysis}>Click</button> */}
            <div>
              <h2>Health Characteristics:</h2>

              <ListStyled>
                {healthLabels.map((label, index) => (
                  <div key={index}>{label}</div>
                ))}
              </ListStyled>
            </div>

            <h2>Nutrients:</h2>
            <ListStyled>
              {Object.keys(nutrients).map((nutrient, index) => (
                <div className="nutrient-info" key={index}>
                  <ul>
                    <li> Label: {nutrients[nutrient]['label']}</li>
                    <li> Quantity: {nutrients[nutrient]['quantity']}</li>
                    <li> Unit: {nutrients[nutrient]['unit']}</li>
                  </ul>
                </div>
              ))}
            </ListStyled>
          </div>
        </NutrientsStyled>
      )}
    </motion.div>
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

const ButtonStyled = styled.button`
  width: 7rem;
  height: 7rem;
  background-color: none;
  border: none;
  border-radius: 50%;

  img {
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

const NutrientsStyled = styled.div`
  margin: 4rem 15%;
  img {
    width: 50%;
  }
`;

const ListStyled = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 2rem;

  ul {
    list-style-type: none;
  }
`;

export default Recipe;
