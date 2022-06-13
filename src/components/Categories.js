import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { cusines } from '../use-data'



const Categories = () => {

  return (
    <CategoryStyled>
      {cusines.map((cuisine) => {
        return (
          <div key={cuisine.id}>
            <NavLink to={`/cuisine/${cuisine.cuisine}`}>
              <button>{cuisine.cuisine}</button>
            </NavLink>
          </div>
        );
      })}
    </CategoryStyled>
  );
};

const CategoryStyled = styled.section`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 5rem;
`;

export default Categories;
