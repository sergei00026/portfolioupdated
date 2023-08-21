import React from 'react';
import styled from "styled-components";

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li><a href="#"><span>#</span>home</a></li>
                <li><a href="#"><span>#</span>Портфолио</a></li>
                <li><a href="#"><span>#</span>Навыки</a></li>
                <li><a href="#"><span>#</span>Контакты</a></li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 32px;
    align-items: center;
    font-weight: 500;
    color: #ABB2BF;


    li {
      transition: 0.3s ease;

      :hover {
        color: #fff;
      }

      span {
        color: #C778DD;
      }
    }

    li > a > span {
      color: #C778DD;
    }
  }
`