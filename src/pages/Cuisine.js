import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { cusines } from '../use-data';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = (cuisineName) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `http://localhost:8000/cuisine`,
      params: {
        cuisine: cuisineName,
        number: 200,
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host':
          'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
      },
    };
    axios
      .request(options)
      .then((response) => {
        console.log('LOOK HERE : ', response.data.results);
        setCuisine(response.data.results);

        console.log('CUISINE, response: ', response);
        console.log('CUISINE: ', response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <DisplayCuisineStyled>
      {cuisine.map((dish) => {
        return (
          <CuisineCardStyled key={dish.id}>
            <img src={dish.image} alt={dish.title} />
            <h4>{dish.title}</h4>
          </CuisineCardStyled>
        );
      })}
    </DisplayCuisineStyled>
  );
};

const DisplayCuisineStyled = styled.section`
margin: 4rem 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const CuisineCardStyled = styled.div`
  margin-top: 4rem;
  img {
    width: 100%;
    border-radius: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
`;

export default Cuisine;
