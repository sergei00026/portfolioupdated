import React from 'react';
import styled from "styled-components";
import {Theme} from "../Theme";

type PointsPropsType = {
    quantity: number
    width: string
    height: string
    wrap?: string
    gap?: number
    top?: number
    bottom?: number
    left?: number
    right?: number
    className?:string
}

export const Points = (props: PointsPropsType) => {
    let span = []
    for (let i = 0; i < props.quantity; i++) {
        span.push(<span key={i}></span>)
    }
    return (
        <StyledPoints
        quantity={props.quantity}
        width={props.width}
        height={props.height}
        wrap={props.wrap}
        gap={props.gap}
        top={props.top}
        bottom={props.bottom}
        left={props.left}
        right={props.right}
        className={props.className}
        >
            {span}
        </StyledPoints>
    )
}

const StyledPoints = styled.div<PointsPropsType>`
  display: flex;
  justify-content: space-around;
  flex-wrap: ${props => props.wrap};
  width: ${props => `${props.width}px`};
  height: ${props => `${props.height}px`};
  gap: ${props => `${props.gap}px`};
  position: absolute;
  z-index: 3;
  top: ${props => `${props.top}%`};
  bottom: ${props => `${props.bottom}%`};
  left: ${props => `${props.left}%`};
  right: ${props => `${props.right}%`};

  span {
    width: 4px;
    height: 4px;
    background-color: ${Theme.colors.secondary};
    border-radius: 50%;
  }
`