import styled, {css} from "styled-components";
import {Theme} from "../../styles/Theme";

const HeaderWpapper = styled.header`
  padding: 32px 0px;
  position: fixed;
  z-index: 2;
  top: 0;left: 0;
  width: 100%;
  background-color: ${Theme.colors.bgPrimary};
`

const HeaderBox = styled.div<{ isOpen?: Boolean }>`
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
    cursor: pointer;
    ${props => props.isOpen && css<{ isOpen: Boolean }>`
      background-color: transparent;
    `}
    &:before, &:after {
      content: '';
      position: absolute;
      display: inline-block;
      height: 1.5px;
      background-color: ${Theme.colors.primary};
      transition: 0.3s ease;
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