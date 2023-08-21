import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/main/photo.png'
import {Link} from "../../../components/link/Link";
import {Icon} from "../../../components/icon/Icon";

export const Main = () => {
    return (
        <MainSection>
            <div>
                <MainTitle>Сергей Королев <span>Front-end developer</span></MainTitle>
                <MainDesc>Я Верстальщик / Frontend разработчик. Занимаюсь разработкой сайтов и веб приложений
                </MainDesc>
                <Link value={'Позвонить'} href={'tel:89872822244'}/>
            </div>
            <MainImgBox>
                <DecorMainImgBox>
                    <Icon iconId={'simbol'} width="156" height="156" viewBox="0 0 156 156"/>
                </DecorMainImgBox>
                <img src={photo} alt=""/>
                <ImgLink href="#">
                    <div></div>
                    Вы можете ознакомиться с моими работами в <span> портфолио</span></ImgLink>
            </MainImgBox>
        </MainSection>
    );
};

const MainSection = styled.section`
  display: flex;
  gap: 32px;
  align-items: center;
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

  > img {
    position: relative;
    z-index: 1;
    object-fit: cover;
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


  > div {
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