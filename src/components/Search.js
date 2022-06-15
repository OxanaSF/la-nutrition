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
        setInput('')
    }


  return (
    <FormStyled onSubmit={onSubmitHandler}>
        <FaSearch className='search-icon' />
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

  .search-icon {
    position: absolute;
    top: 6.1rem;
    left: 1.6rem;
    font-size: 2rem;
    color: #999999;
    margin-right: 2rem;
    font-weight: 100;
    
  }

  input {
    border: 1px solid #999999;
    padding: 1rem 3rem;
    border-radius: 1rem;
    outline: none;
    font-size: 1.5rem;
    width: 100%;
    text-align: center;
    color: #999999;
    font-weight: 600;
    letter-spacing: 1px;
  }
`;

export default Search;
