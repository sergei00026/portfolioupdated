import React from 'react';
import styled from "styled-components";

type LinkPropsType={
    value: string | number
    href: string
    target?: string
}

export const Link:React.FC<LinkPropsType> = (props:LinkPropsType) => {
    return (
        <LinkDefault href={props.href} target={props.target}>
            {props.value}
        </LinkDefault>
    );
};

const LinkDefault = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 37px;
  padding: 5px 16px;
  border: 1px solid  #C778DD;
  font-weight: 500;
  color: #fff;
  transition: 0.3s ease;
  :hover{
    color: #ABB2BF;
    border: 1px solid var(--gray, #ABB2BF);
  }
`