import React from 'react';
import styled from "styled-components";

type WidthLinePropsType = {
    width: string
}
export const TitleLine = (props: WidthLinePropsType) => {
    return (
        <WidthLine width={props.width}/>

    );
};


const WidthLine = styled.div<WidthLinePropsType>`
  width: ${props => `${props.width}%`};
  height: 1px;
  background-color: #C778DD;
`
