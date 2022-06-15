import { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        navigate('/searched/' + input)
    }


  return (
    <FormStyled onSubmit={onSubmitHandler}>
        <FaSearch className='search-icon'></FaSearch>
        <input 
            onChange={(e) => setInput(e.target.value)}
            type="text"
            value={input}
             />
    </FormStyled>
  );
};

const FormStyled = styled.form`
  padding-top: 5rem;
    margin: auto;
    position: relative;
    width: 65%;

  input {
    border: 1px solid #999999;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1.5rem;
    width: 100%;
  }
`;

export default Search;
