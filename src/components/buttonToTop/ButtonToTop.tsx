import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {Theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll/modules";

export const ButtonToTop = () => {

    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }

        })

    }, [])

    return (
        <>
            {showBtn && (
                <StylesButtonToTop onClick={() => scroll.scrollToTop()}>
                    <Icon iconId={'arrowTop'} width={'35px'} height={'35px'} viewBox={'0 0 35 35'}/>
                </StylesButtonToTop>
            )}
        </>

    );
};

const StylesButtonToTop = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  animation: myAnim 2s ease-out 0s 1 normal forwards;
  svg {
    fill: ${Theme.colors.secondary};
  }

  @media ${Theme.media.mobile} {
    right: 10px;
    bottom: 10px;
  }
  @keyframes myAnim {
    0% {
      opacity: 0;
      transform: translateY(250px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`