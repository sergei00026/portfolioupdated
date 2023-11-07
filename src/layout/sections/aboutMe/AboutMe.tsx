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
                            <p>Меня зовут Сергей. Я профессионально занимаюсь созданием сайтов
                                и веб-приложений.</p>
                            <p>Почему выбрать меня в качестве верстальщика? Я подхожу к каждому проекту с огромной
                                ответственностью.
                                Мне важно создавать уникальные работы, исключая плагиат и небрежность. Я уделяю особое
                                внимание изучению проекта, клиента и его целевой аудитории. Моя цель - обеспечить
                                высокое качество работы, при этом учитывая все правки и пожелания. Я постоянно изучаю
                                новые технологии, чтобы обеспечить оптимальную надежность сайта. В моей работе я
                                использую только современные технологии, чтобы обеспечить легкую поддержку,
                                семантичность, кроссбраузерность и доступность для всех пользователей.</p>
                            <p>Если вам интересно сотрудничество со мной, или если у вас есть дополнительные
                                вопросы то я предоставлю все свои контакты ниже.</p>
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

