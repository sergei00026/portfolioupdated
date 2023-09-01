import React from 'react';
import styled from "styled-components";
import {Theme} from "../../styles/Theme";

type WidthLinePropsType = {
    width: string
}
export const TitleLine:React.FC<WidthLinePropsType> = (props: WidthLinePropsType) => {
    return (
        <WidthLine width={props.width}/>

    );
};


const WidthLine = styled.div<WidthLinePropsType>`
  width: ${props => `${props.width}%`};
  height: 1px;
  background-color: ${Theme.colors.accent}
`
