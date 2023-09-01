import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme";

export const Menu:React.FC = () => {
    return (
        <StyledMenu isOpen={false}>
            <ul>
                <li><a href="#"><span>#</span>home</a></li>
                <li><a href="#"><span>#</span>Портфолио</a></li>
                <li><a href="#"><span>#</span>Навыки</a></li>
                <li><a href="#"><span>#</span>Контакты</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<{isOpen: Boolean}>`
  ul {
    display: flex;
    gap: 32px;
    align-items: center;
    font-weight: 500;
    color: ${Theme.colors.secondary};
    transition: .3s ease;

    @media ${Theme.media.mobile} {
      flex-direction: column;
      color: ${Theme.colors.primary};
    }

    li {
      transition: 0.3s ease;

      :hover {
        color: ${Theme.colors.primary};
      }

      span {
        color: ${Theme.colors.accent};
      }
    }
  }

  @media ${Theme.media.mobile} {
    position: fixed;
    z-index: 100;
    background-color: rgba(43, 44, 47, 0.89);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: none;
    align-items: center;
    justify-content: center;
    ${props => props.isOpen && css<{isOpen: Boolean}>`
    display: flex;  
  `}
    
  }
  
 
`