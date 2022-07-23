import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Loader from '../components/Loader';

const Searched = (props) => {
  const [searchedQuery, setSearchedQuery] = useState([]);
  const [isLoading, setLoading] = useState(true);
  let params = useParams();

  const getSearched = (queryName) => {
    const axios = require('axios');

    const options = {
      method: 'GET',
      url: `https://gentle-shore-78455.herokuapp.com/searched`,
      params: {
        query: queryName,
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
        setSearchedQuery(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <DisplaySearchedStyled
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {searchedQuery.map((query) => {
            return (
              <SearchedCardStyled key={query.id}>
                <Link to={/recipe/ + query.id}>
                  <img src={query.image} alt={query.title} />
                  <h4>{query.title}</h4>
                </Link>
              </SearchedCardStyled>
            );
          })}
        </DisplaySearchedStyled>
      )}
    </>
  );
};

const DisplaySearchedStyled = styled(motion.section)`
  margin: 4rem 10%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
`;

const SearchedCardStyled = styled.div`
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

export default Searched;
