import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Translator} from "../../components/translator/Translator";
import styled from "styled-components";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";


export const Header = () => {
    return (
        <header className="header">
            <Container>
                <FlexWrapper gap={'32'} align={'center'}>
                    <Logo/>
                    <HeaderBox>
                        <Menu/>
                        <Translator/>
                    </HeaderBox>
                </FlexWrapper>
            </Container>
        </header>
    );
};

const HeaderBox = styled.div`
  margin-left: auto;
  align-items: center;
  display: flex;
  gap: 32px;
`
