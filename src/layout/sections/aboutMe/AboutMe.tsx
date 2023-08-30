import React from 'react';
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import styled from "styled-components";
import {Link} from "../../../components/link/Link";
import photo from '../../../assets/main/photo.png'
import {Container} from "../../../components/container/Container";


export const AboutMe = () => {
    return (
        <section>
            <Container>
                <SectionTitleBox>
                    <SectionTitle><span>#</span>Обо мне</SectionTitle>
                    <TitleLine width='60'/>
                </SectionTitleBox>
                <AboutMeBody>
                    <div>
                        <AboutMeText>
                            <p>Итак, вы уже знаете, что меня зовут Сергей. Немного о себе: живу в Стрелитамаке,
                                профессионально создаю сайты и веб-приложения.</p>
                            <p>Почему вы должны выбрать меня? Я подхожу к каждому заказу с большой ответственностью и
                                любовью, так как хочу сделать себе имя, исключить плагиат и халатность, полностью
                                изучить                                проект, клиента и его целевую аудиторию, работать на качество, стараясь сделать заказ
                                максимально быстро и уникально, учитывая все правки и желания.
                                                               Я постоянно осваиваю новые технологии, что позволяет добиться идеальной оптимизации
                                надежности сайта.
                                В работе использую только современные технологии, что позволяет легко поддерживать сайт,
                                сделаю сайт семантичным, кроссбраузерным, а также доступным для всех людей.</p>
                            <p>Если вы заинтересованы во мне, хотите узнать что-то еще или воспользоваться моими
                                услугами,
                                то я предоставлю все свои контакты ниже.</p>
                        </AboutMeText>
                        <Link value={'Подробнее ->'} href={'#'}/>
                    </div>
                    <AboutMeImg>
                        <img src={photo} alt="photo"/>
                        <TitleLine width={'75'}/>
                    </AboutMeImg>
                </AboutMeBody>
            </Container>
        </section>
    );
};


const AboutMeBody = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  align-items: center;
`

const AboutMeText = styled.div`
  line-height: 160%;
  color: #ABB2BF;

  p {
    :not(:last-child) {
      margin-bottom: 10px;
    }
  }

  :not(:last-child) {
    margin-bottom: 27px;
  }
`

const AboutMeImg = styled.div`
  img{
    max-width: 100%;
  }
  >div{
    margin: 0 auto;
  }
  
`