import React from 'react';
import styled from "styled-components";
import {Theme} from "../Theme";

type ButtonPropsType={
    value: string | number
}

export const Button = (props:ButtonPropsType) => {
    return (
        <button>
            {props.value}
        </button>
    );
};

const ButtonDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 37px;
  padding: 5px 16px;
  border: 1px solid  ${Theme.colors.accent};
  font-weight: 500;
  color: ${Theme.colors.primary};
`