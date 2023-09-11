import React, {useState} from 'react';
import {Logo} from "../../components/logo/Logo";
import {Translator} from "../../components/translator/Translator";
import {Menu} from "../../components/menu/Menu";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {S} from "./Header-Styles"


export const Header: React.FC = () => {
    const [menuIsOpen, setIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setIsOpen(!menuIsOpen)
    }

    return (
        <S.HeaderWpapper className="header">
            <Container>
                <FlexWrapper gap={'32'} align={'center'}>
                    <Logo/>
                    <S.HeaderBox onClick={() => {
                        setIsOpen(false)
                    }}>
                        <Menu isOpen={menuIsOpen}/>
                    </S.HeaderBox>
                    <Translator/>
                    <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                        <span></span>
                    </S.BurgerButton>
                </FlexWrapper>
            </Container>
        </S.HeaderWpapper>
    );
};
