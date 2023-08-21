import React from 'react';
import styled from "styled-components";


type LengthPropsType ={
    length: string
}
export const Square = (props: LengthPropsType) => {
    return (
        <LengthStyled length={props.length}/>


    );
};

const LengthStyled = styled.div<LengthPropsType>`
  width: ${props => `${props.length}px`};
  height: ${props => `${props.length}px`};
  border: 1px solid #ABB2BF;
 
`

