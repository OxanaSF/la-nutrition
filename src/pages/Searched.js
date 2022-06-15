import {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import styled from 'styled-components';

const Searched = () => {

    const [searchedQuery, setSearchedQuery] = useState([])
    let params = useParams()

    const getSearched = (queryName) => {
        const axios = require('axios');
    
        const options = {
          method: 'GET',
          url: `http://localhost:8000/searched`,
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
            console.log('LOOK HERE : ', response.data.results);
            setSearchedQuery(response.data.results);
    
            console.log('QUERY: ', response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      };

useEffect(() => {
getSearched(params.search)
}, [params.search])

  return (
    <DisplaySearchedStyled >
        {searchedQuery.map((query) => {
            return (
                <SearchedCardStyled key={query.id}>
                    <img src={query.image} alt={query.title} />
                    <h4>{query.title}</h4>
                </SearchedCardStyled>
            )
        })}
    </DisplaySearchedStyled>
  )
}


const DisplaySearchedStyled = styled.section`
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


export default Searched