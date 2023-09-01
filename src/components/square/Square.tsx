import React from 'react';
import styled from "styled-components";


type LengthPropsType ={
    length: string
    top?: number
    bottom?: number
    left?: number
    right?: number
}
export const Square:React.FC<LengthPropsType> = (props: LengthPropsType) => {
    return (
        <LengthStyled
            length={props.length}
            top={props.top}
            bottom={props.bottom}
            left={props.left}
            right={props.right}
        />
    );
};

const LengthStyled = styled.div<LengthPropsType>`
  width: ${props => `${props.length}px`};
  height: ${props => `${props.length}px`};
  border: 1px solid #ABB2BF;
  position: absolute;
  top: ${props => `${props.top}%`};
  bottom: ${props => `${props.bottom}%`};
  left: ${props => `${props.left}%`};
  right: ${props => `${props.right}%`};
`

