import React from 'react';
import styled from "styled-components";


type FlexWrapperPropsType = {
    justify?: string
    align?: string
    wrap?: string
    direction?: string
    gap?: string
    colgap?: string
    rowgap?: string
    className?: string

}

export const FlexWrapper= styled.div<FlexWrapperPropsType>`
  display: flex;
  height: 100%;
  justify-content: ${props => props.justify};
  align-items: ${props => props.align};
  flex-wrap: ${props => props.wrap};
  flex-direction: ${props => props.direction};
  gap: ${props => `${props.gap}px`};
  column-gap: ${props => `${props.colgap}px`};
  row-gap: ${props => `${props.rowgap}px`};
`