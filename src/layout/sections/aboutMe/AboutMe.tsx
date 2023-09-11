import React from 'react';
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import {Link} from "../../../components/link/Link";
import photo from '../../../assets/main/photo.png'
import {Container} from "../../../components/container/Container";
import {S} from './Aboutme-styles'
import styled from "styled-components";
import {Translator} from "../../../components/translator/Translator";


export const AboutMe:React.FC = () => {
    return (
        <AboutMeBox>
            <Container>
                <SectionTitleBox>
                    <SectionTitle><span>#</span>Обо мне</SectionTitle>
                    <TitleLine width='60'/>
                </SectionTitleBox>
                <S.AboutMeBody>
                    <div>
                        <S.AboutMeText>
                            <p>Итак, вы уже знаете, что меня зовут Сергей. Немного о себе: живу в Стрелитамаке,
                                профессионально создаю сайты и веб-приложения.</p>
                            <p>Почему вы должны выбрать меня? Я подхожу к каждому заказу с большой ответственностью и
                                любовью, так как хочу сделать себе имя, исключить плагиат и халатность, полностью
                                изучить проект, клиента и его целевую аудиторию, работать на качество, стараясь сделать
                                заказ
                                максимально быстро и уникально, учитывая все правки и желания.
                                Я постоянно осваиваю новые технологии, что позволяет добиться идеальной оптимизации
                                надежности сайта.
                                В работе использую только современные технологии, что позволяет легко поддерживать сайт,
                                сделаю сайт семантичным, кроссбраузерным, а также доступным для всех людей.</p>
                            <p>Если вы заинтересованы во мне, хотите узнать что-то еще или воспользоваться моими
                                услугами,
                                то я предоставлю все свои контакты ниже.</p>
                        </S.AboutMeText>
                        <Link value={'Подробнее ->'} href={'#'}/>
                    </div>
                    <S.AboutMeImg>
                        <img src={photo} alt="photo"/>
                        <TitleLine width={'75'}/>
                    </S.AboutMeImg>
                </S.AboutMeBody>
            </Container>
        </AboutMeBox>
    );
};

const AboutMeBox = styled.section`
  position: relative;`

