import React from 'react';
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {Icon} from "../../../components/icon/Icon";
import {Points} from "../../../components/points/Points";
import {S} from './Contacts-styles'

export const Contacts:React.FC = () => {
    return (
        <S.SectionContacts>
            <Container>
                <SectionTitleBox>
                    <SectionTitle><span>#</span>Контакты</SectionTitle>
                    <TitleLine width='30'/>
                </SectionTitleBox>
                <FlexWrapper className={'contacts-wrapper'} justify={'space-between'} gap={'16'}>
                    <Points className={'points'} quantity={25} width={'103'} height={'103'} gap={20.75} wrap={'wrap'}/>
                    <S.ContactsText>
                        Со мной можно связаться, любым удобным способом, по:
                    </S.ContactsText>
                    <S.ContactsMessages>
                        <S.ContactsList>
                            <S.Contact>
                                <p>Напишите мне </p>
                                <a href="https://discordapp.com/users/923635773134213171/" target="_blank">
                                    <Icon iconId={'discord'} width="32" height="32" viewBox="0 0 32 32"/>
                                    <span>Serjio #3941</span>
                                </a>
                                <a href="mailto:ksvladimirovish@gmail.com" target="_blank">
                                    <Icon iconId={'email'} width="32" height="32" viewBox="0 0 32 32"/>
                                    <span>ksvladimirovish<wbr/>@gmail.com</span>
                                </a>
                                <a href="https://t.me/Serkaz6" target="_blank">
                                    <Icon iconId={'telegram'} width="32" height="32" viewBox="0 0 24 24"/>
                                    <span>@Serkaz6</span>
                                </a>
                            </S.Contact>
                        </S.ContactsList>
                    </S.ContactsMessages>
                </FlexWrapper>
            </Container>
        </S.SectionContacts>
    );
};
