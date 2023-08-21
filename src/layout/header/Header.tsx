import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Translator} from "../../components/translator/Translator";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";

export const Header = () => {
    return (
        <header className="header">
            <StyledHeaderContainer className="header__container">
                <Logo/>
                <div className="header__box">
                    <Menu/>
                    <Translator/>
                </div>
            </StyledHeaderContainer>
        </header>
    );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  >.header__box{
    margin-left: auto;
    align-items: center;
    display: flex;
    gap: 32px;
  }

`
