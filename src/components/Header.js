import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const bgImg = `${process.env.PUBLIC_URL}/images/bg-food-img.jpg`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header-title"></div>

      
        <NavLink to="/">
        <GradientStyled>
          <h1>La Nutrition</h1>
          </GradientStyled>
        </NavLink>
      
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  margin: 0;
  padding: 0;
  background: url(${bgImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  position: relative;
`;

const GradientStyled = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2rem;
  font-size: 700;
  letter-spacing: 0.1rem;

  h1 {
    padding: 0 5%;
  }

  @media only screen and (max-width: 600px) {
    h1 {
      font-size: 2.6rem;
    }
  }
`;

export default Header;
