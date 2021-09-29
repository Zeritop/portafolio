import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

const NavBar = styled.div`
  background: ${theme.thirdColor};
  height: auto;
  padding: 15px;
  color: ${theme.textIcons};
  font-weight: 500;
  font-size: larger;
  width: 100%;
  position: fixed;
  border-bottom: 1px solid ${theme.firstColor} ;
  display: flex;
  justify-content: space-around;
  z-index: 1000;

  a{
      text-decoration: none;
      color: ${theme.textIcons};
  }

  div{
      display: inline-flex;

      a{
        color: ${theme.textIcons};
        text-decoration: none;
        margin: 0 5px;
        cursor: pointer;
    
        &:hover{
          color: ${theme.fourthColor};
          border-bottom: 1px solid ${theme.fourthColor};
        }
      }

      @media(max-width: 799px){
        display: none;
      }
  }

   
`;

const Navbar = () => {
    
    return ( 
        <NavBar>
          <Link to="/">Sebastián</Link>
          <div>
            
            <a href="#sectionExperience">Experience</a>
            
            <a href="#sectionSklls"> Skills </a>
            
            <a href="#sectionProjects"> Projects </a>
            
          </div>
        </NavBar> 
     );
}
 
export default Navbar;