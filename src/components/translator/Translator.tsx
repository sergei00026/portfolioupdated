import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";


export const Translator: React.FC = () => {
    return (
        <StyledTranslator>
            <Icon iconId='arrow-bottom' width="10" height="7" viewBox="0 0 10 7"/>
        </StyledTranslator>
    );
};

const StyledTranslator = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`
