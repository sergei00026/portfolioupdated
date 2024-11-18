import React from 'react';
import {Container} from "../../components/container/Container";
import {Icon} from "../../components/icon/Icon";
import {S} from  './Footer-styles'

export const Footer:React.FC = () => {
    return (
        <S.FooterStyled>
            <Container>
                <S.FooterBox>
                    <S.FooterDescBox>
                        <S.FooterDesc>
                            <a href={'#'}>
                                <Icon iconId={'logo'} width="16" height="17" viewBox="0 0 16 17"/>
                            </a>
                            <a href="mailto:ksvladimirovish@gmail.com" target="_blank">ksvladimirovish
                                <wbr/>
                                @gmail.com</a>
                        </S.FooterDesc>
                        <p>Верстальщик и front-end developer</p>
                    </S.FooterDescBox>
                    <S.FooterMediaBox>
                        <S.FooterMedia>Медиа</S.FooterMedia>
                        <S.FooterSocials>
                            <a href="https://github.com/sergei00026" target="_blank">
                                <Icon iconId={'github'} width="32" height="32" viewBox="0 0 32 32"/>
                            </a>
                            <a href="https://t.me/Serkaz6" target="_blank">
                                <Icon iconId={'telegram'} width="24" height="20" viewBox="0 0 24 24"/>
                            </a>
                            <a href="https://discordapp.com/users/923635773134213171/" target="_blank">
                                <Icon iconId={'discord'} width="32" height="32" viewBox="0 0 32 32"/>
                            </a>
                        </S.FooterSocials>
                    </S.FooterMediaBox>
                </S.FooterBox>
                <S.FooterCopy>
                    © Copyright 2024. Made by Sergei Korolev
                </S.FooterCopy>
            </Container>
        </S.FooterStyled>
    );
};
