import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/main/photo.png'
import {Link} from "../../../components/link/Link";
import {Icon} from "../../../components/icon/Icon";
import {Points} from "../../../components/points/Points";
import {Container} from "../../../components/container/Container";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";

export const Main = () => {
    return (
        <Container>
            <FlexWrapper gap={'32'} align={'center'} justify={'space-between'}>
                <MainTextBlock>
                    <MainTitle>Сергей Королев <span>Front-end developer</span></MainTitle>
                    <MainDesc>Я Верстальщик / Frontend разработчик. Занимаюсь разработкой сайтов и веб приложений
                    </MainDesc>
                    <Link value={'Позвонить'} href={'tel:89872822244'}/>
                </MainTextBlock>
                <MainImgBox>
                    <DecorMainImgBox>
                        <Icon iconId={'simbol'} width="156" height="156" viewBox="0 0 156 156"/>
                    </DecorMainImgBox>
                    <Points quantity={20} width={'84'} height={'84'} wrap={'wrap'} gap={16} right={10} bottom={15}/>
                    <img src={photo} alt="photo"/>
                    <ImgLink href="#">
                        Вы можете посмотреть мое <span> портфолио</span>
                    </ImgLink>
                </MainImgBox>
            </FlexWrapper>
        </Container>
    );
};

const MainTextBlock = styled.div`
flex: 0 1 calc(50% - 8px);
`

const MainTitle = styled.h1`
  font-size: 32px;
  font-weight: 600;
  color: #FFF;

  span {
    color: #C778DD;
  }

  :not(:last-child) {
    margin-bottom: 32px;
  }
`

const MainDesc = styled.p`
  line-height: 156%;
  color: #ABB2BF;

  :not(:last-child) {
    margin-bottom: 24px;
  }
`

const MainImgBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 0 1 calc(50% - 8px);

  > img {
    position: relative;
    z-index: 1;
    object-fit: cover;
    max-width: 100%;
  }
`

const ImgLink = styled.a`
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  color: #ABB2BF;
  border: 1px solid #ABB2BF;
  padding: 8px;
  gap: 10px;

  &:before {
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    flex: 0 0 16px;
    background: #C778DD;
  }

  span {
    color: #fff;
  }
`

const DecorMainImgBox = styled.div`
  position: absolute;
  top: 29%;
  left: 5%;
  z-index: 1;
`