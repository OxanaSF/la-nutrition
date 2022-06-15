import { FaHome } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const style = {
    color: '#013300',
    fontSize: '2.5rem',
  };

  return (
    <NavStyled>
      <NavLink to="/">
        <FaHome style={style} />
      </NavLink>

      <div className="links-on-the-right">
        <NavLink to="/generate" className="generate">
          Generate Menu Under 1200 cal
        </NavLink>
      </div>
    </NavStyled>
  );
};

const NavStyled = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;

  .generate {
    margin-left: 2rem;
    border: 2px solid #011d00;
    color: #011d00;
    font-weight: 600;
    letter-spacing: 0.1rem;
    font-size: 1.1rem;
    text-transform: uppercase;
    padding: 1rem;
    border-radius: 0.5rem;
  }


  @media only screen and (max-width: 600px) {
    /* flex-direction: column; */
    gap: 2rem;
    .generate  {
      font-size: 0.5rem;
      padding: 0.8rem;
  }
}

`;

export default Nav;
