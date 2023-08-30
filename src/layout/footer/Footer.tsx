import React from 'react';
import {Container} from "../../components/container/Container";
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {Theme} from "../../components/Theme";

export const Footer = () => {
    return (
        <FooterStyled>
            <Container>
                <FooterBox>
                    <div>
                        <FooterDesc>
                            <a href={'#'}>
                                <Icon iconId={'logo'} width="16" height="17" viewBox="0 0 16 17"/>
                            </a>
                            <a href="mailto:ksvladimirovish@gmail.com" target="_blank">ksvladimirovish@gmail.com</a>
                        </FooterDesc>
                        <p>Верстальщик и front-end developer</p>
                    </div>
                    <div>
                        <FooterMedia>Медиа</FooterMedia>
                        <FooterSocials>
                            <a href="https://github.com/sergei00026" target="_blank">
                                <Icon iconId={'github'} width="32" height="32" viewBox="0 0 32 32"/>
                            </a>
                            <a href="https://t.me/Serkaz6" target="_blank">
                                <Icon iconId={'telegram'} width="24" height="20" viewBox="0 0 24 24"/>
                            </a>
                            <a href="https://discordapp.com/users/923635773134213171/" target="_blank">
                                <Icon iconId={'discord'} width="32" height="32" viewBox="0 0 32 32"/>
                            </a>
                        </FooterSocials>
                    </div>
                </FooterBox>
                <FooterCopy>
                    © Copyright 2023. Made by Sergei Korolev
                </FooterCopy>
            </Container>

        </FooterStyled>
    );
};

const FooterStyled = styled.footer`
  border-top: 1px solid ${Theme.colors.secondary};
  margin-top: 145px;

  ${Container} {
    padding: 32px 0;
  }
`

const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
  padding-bottom: 48px;
`

const FooterCopy = styled.div`
  text-align: center;
  color: ${Theme.colors.secondary};
`

const FooterDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
  color: ${Theme.colors.secondary};
`

const FooterMedia = styled.div`

  font-size: 24px;
  font-weight: 500;
  margin-bottom: 12px;

`
const FooterSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

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