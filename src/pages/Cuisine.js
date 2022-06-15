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
            <Link to={/recipe/ + dish.id}>
            <img src={dish.image} alt={dish.title} />
            <h4>{dish.title}</h4>
            </Link>
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
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 1rem;
    color: black;
    border: 1px solid gray;
    height: 5rem;
    border: 0.1rem solid #e6e6e6;
    border-top: none;
    border-bottom-left-radius: 1.2rem;
    border-bottom-right-radius: 1.2rem;
    letter-spacing: 1px;
    transform: translateY(-10.5%);
  }
`;

export default Cuisine;
