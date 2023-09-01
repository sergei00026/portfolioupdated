import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme";

const HeaderWpapper = styled.header`
  margin-top: 32px;
`

const HeaderBox = styled.div`
  margin-left: auto;
  align-items: center;
  display: flex;
  gap: 32px;
`
const BurgerButton = styled.div<{ isOpen: Boolean }>`
  display: flex;
  position: relative;
  z-index: 200;
  cursor: pointer;
  padding: 10px 0;

  span {
    display: inline-block;
    width: 32px;
    height: 1.5px;
    background-color: ${Theme.colors.primary};
    position: relative;
    transition: 0.3s ease;
    
    ${props => props.isOpen && css<{ isOpen: Boolean }>`
      background-color: transparent;
    `}
    &:before, &:after {
      content: '';
      position: absolute;
      display: inline-block;
      height: 1.5px;
      background-color: ${Theme.colors.primary};
    }

    &:before {
      width: 32px;
      transform: translateY(-8px);
      ${props => props.isOpen && css<{ isOpen: Boolean }>`
        transform: translateY(0) rotate(-45deg);
      `}
    }

    &:after {
      width: 24px;
      transform: translateY(8px);
      ${props => props.isOpen && css<{ isOpen: Boolean }>`
        transform: translateY(0) rotate(45deg);
        width: 32px;
      `}
    }
  }


  @media ${Theme.media.mobileMin} {
    display: none;
  }

`

export const S = {
    HeaderWpapper,
    HeaderBox,
    BurgerButton,
}