import React from 'react';
import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme";
import {Link} from "react-scroll";

export const Menu: React.FC<{ isOpen: Boolean }> = (props: { isOpen: Boolean }) => {

    const menuData = [
        {
            title: 'Главная',
            href: 'home'
        },
        {
            title: 'Портфолио',
            href: 'portfolio'
        },
        {
            title: 'Навыки',
            href: 'aboutMe'
        },
        {
            title: 'Контакты',
            href: 'contacts'
        },
    ]


    return (
        <StyledMenu isOpen={props.isOpen}>
            <ul>
                {menuData.map((item, idx) => {
                    return (
                        <li key={idx}>
                            <NavLink
                                to={item.href}
                                spy={true}
                                activeClass={'active'}
                                smooth={true}
                            ><span>#</span> {item.title}</NavLink>
                        </li>
                    )
                })}

            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav<{ isOpen: Boolean }>`
  ul {
    display: flex;
    gap: 16px;
    align-items: center;
    font-weight: 500;
    color: ${Theme.colors.secondary};

    @media ${Theme.media.mobile} {
      flex-direction: column;
      color: ${Theme.colors.primary};
      gap: 32px;
    }

    li {

      span {
        color: ${Theme.colors.accent};
      }
    }
  }


  @media ${Theme.media.mobile} {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(43, 44, 47, 0.89);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .3s ease ;
    transform: translateX(-100%);
    ${props => props.isOpen && css<{ isOpen: Boolean }>`
      z-index: 100;
      transform: translateX(0);
    `}

  }
`

const NavLink = styled(Link)`
  transition: 0.3s ease;
  cursor: pointer;

  :hover, &.active {
    color: ${Theme.colors.primary};
  }

`