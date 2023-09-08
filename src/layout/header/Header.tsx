import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Translator} from "../../components/translator/Translator";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {S} from "./Header-Styles"


export const Header: React.FC = () => {
    return (
        <S.HeaderWpapper className="header">
            <Container>
                <FlexWrapper gap={'32'} align={'center'}>
                    <Logo/>
                    <S.HeaderBox>
                        <Menu/>
                    </S.HeaderBox>
                    <Translator/>
                    <S.BurgerButton isOpen={false}>
                        <span></span>
                    </S.BurgerButton>
                </FlexWrapper>
            </Container>
        </S.HeaderWpapper>
    );
};
