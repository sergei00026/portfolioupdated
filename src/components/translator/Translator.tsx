import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Translator: React.FC = () => {
    return (
        <StyledTranslator>
            <select name="translator" id="translator">
                <option value='EN'><span>EN</span> <Icon iconId='arrow-bottom' width="10" height="7" viewBox="0 0 10 7"/></option>
                <option value='RU'><span>RU</span> <Icon iconId='arrow-bottom' width="10" height="7" viewBox="0 0 10 7"/></option>
            </select>
            <span>EN</span>
            <Icon iconId='arrow-bottom' width="10" height="7" viewBox="0 0 10 7"/>
        </StyledTranslator>
    );
};

const StyledTranslator = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`
