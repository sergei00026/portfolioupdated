import React from 'react';
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import styled from "styled-components";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {Theme} from "../../../components/Theme";
import {Icon} from "../../../components/icon/Icon";
import {Points} from "../../../components/points/Points";

export const Contacts = () => {
    return (
        <SectionContacts>
            <Points className={'points'}
                    quantity={25}
                    width={'103'} height={'103'} gap={20.75} wrap={'wrap'}/>
            <Container>
                <SectionTitleBox>
                    <SectionTitle><span>#</span>Контакты</SectionTitle>
                    <TitleLine width='30'/>
                </SectionTitleBox>
                <FlexWrapper justify={'space-between'} gap={'16'}>
                    <ContactsText>
                        Со мной можно связаться, любым удобным способом, по:
                    </ContactsText>
                    <ContactsMessages>
                        <ContactsList>
                            <Contact>
                                <p>Напишите мне </p>
                                <a href="https://discordapp.com/users/923635773134213171/" target="_blank">
                                    <Icon iconId={'discord'} width="32" height="32" viewBox="0 0 32 32"/>
                                    <span>Serjio #3941</span>
                                </a>
                                <a href="mailto:ksvladimirovish@gmail.com" target="_blank">
                                    <Icon iconId={'email'} width="32" height="32" viewBox="0 0 32 32"/>
                                    <span>ksvladimirovish@gmail.com</span>
                                </a>
                                <a href="https://t.me/Serkaz6" target="_blank">
                                    <Icon iconId={'telegram'} width="32" height="32" viewBox="0 0 24 24"/>
                                    <span>@Serkaz6</span>
                                </a>
                            </Contact>
                        </ContactsList>
                    </ContactsMessages>
                </FlexWrapper>
            </Container>
        </SectionContacts>
    );
};

const SectionContacts = styled.section`
  position: relative;

  .points {
    top: 55%;
    left: -4.3%;

  }
`

const ContactsText = styled.div`
  color: ${Theme.colors.secondary};
  font-weight: 500;
`

const ContactsMessages = styled.div`
  //flex: 0 1 calc(50% - 8px);

`

const ContactsList = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Contact = styled.div`
  padding: 16px;
  border: 1px solid ${Theme.colors.secondary};
  display: flex;
  flex-direction: column;
  gap: 16px;

  p {
    font-weight: 600;
  }

  a {
    display: flex;
    align-items: center;
    gap: 16px;

  }


  svg {
    fill: ${Theme.colors.secondary};
    transition: 0.3s;
    flex: 0 0 32px;
    justify-self: center;

    &:hover {
      fill: ${Theme.colors.primary};
    }

  }
`