import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { cusines } from '../use-data';

const CuisineType = () => {
  return (
    <CategoryStyled>
      <CategoryDisplayStyled>
        {cusines.map((cuisine) => {
          return (
            <div key={cuisine.id}>
              <NavLinkStyled to={`/cuisine/${cuisine.cuisine}`}>
                <button className="btn-cuisine">{cuisine.cuisine}</button>
              </NavLinkStyled>
            </div>
          );
        })}
      </CategoryDisplayStyled>
    </CategoryStyled>
  );
};

const CategoryStyled = styled.section`
  padding-top: 3rem;
`;

const CategoryDisplayStyled = styled.div`
width: 80%;
margin: 1rem auto;
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
`;

const NavLinkStyled = styled(NavLink)`
  button {
    cursor: pointer;
    padding: 0.2rem;
    height: 3rem;
    width: 9rem;
    background-color: white;
    letter-spacing: 0.1rem;

    border: none;
    font-size: 0.8rem;
    text-transform: uppercase;
    border: 1.4px solid #e6e6e6;
    border-radius: 0.2rem;

    &:hover,
    &:active{
      background-color: #bde6a4;
      transition: .5s all;
      border: none;
      font-weight: 700;
    }
  }
`;

export default CuisineType;
