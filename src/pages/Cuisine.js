import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { capitalize } from '../use-function';
import Loader from '../components/Loader';

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let params = useParams();

  const getCuisine = (cuisineName) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `https://gentle-shore-78455.herokuapp.com/cuisine`,
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
        setCuisine(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getCuisine(params.type);
  }, [params.type]);

  return (
    <CuisinePageStyled
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1> {capitalize(params.type)} cuisine recipes:</h1>

      {isLoading ? (
        <Loader />
      ) : (
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
      )}
    </CuisinePageStyled>
  );
};

const CuisinePageStyled = styled(motion.section)`
  margin-top: 4rem;
  color: #bde6a4;
  h1 {
    font-size: 2rem;
  }
`;

const DisplayCuisineStyled = styled.div`
  margin: 0 10%;
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
    font-weight: 600;
  }
`;

export default Cuisine;
