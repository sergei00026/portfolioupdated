import React from 'react';
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import {Link} from "../../../components/link/Link";
import photo from '../../../assets/main/photo.png'
import {Container} from "../../../components/container/Container";
import {S} from './Aboutme-styles'
import styled from "styled-components";
import {Translator} from "../../../components/translator/Translator";


export const AboutMe: React.FC = () => {
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
                            <p>Меня зовут Сергей, и я специализируюсь на создании современных сайтов и веб-приложений.</p>
                            <p>
                                <strong>Почему стоит выбрать меня для работы над вашим проектом?</strong>
                                <ul>
                                    <li>Ответственный подход. Я тщательно изучаю каждый проект, чтобы максимально соответствовать вашим ожиданиям, включая специфику целевой аудитории.</li>
                                    <li>Качество и уникальность. Моя работа исключает плагиат и гарантирует аккуратность исполнения.</li>
                                    <li>Современные технологии. Использую передовые инструменты и методологии для обеспечения кроссбраузерности, семантики, доступности и лёгкой поддержки.</li>
                                    <li>Гибкость и внимание к деталям. Я всегда учитываю ваши правки и пожелания, стремясь к оптимальному результату.</li>
                                </ul>
                            </p>
                            <p>Кроме того, я регулярно изучаю новые технологии и практики, чтобы предлагать решения, которые отвечают актуальным стандартам.</p>
                            <p>Готов к сотрудничеству и открыт для обсуждения ваших идей. Контакты для связи доступны снизу.</p>
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

