import React from 'react';
import {Container} from "../../../components/container/Container";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import {TitleLine} from "../../../components/titleLine/TitleLine";
import img01 from '../../../assets/portfolio/01.jpg'
import img02 from '../../../assets/portfolio/02.jpg'
import img03 from '../../../assets/portfolio/03.jpg'
import img04 from '../../../assets/portfolio/04.jpg'
import img05 from '../../../assets/portfolio/05.jpg'
import img06 from '../../../assets/portfolio/06.jpg'
import img07 from '../../../assets/portfolio/07.jpg'
import img08 from '../../../assets/portfolio/08.jpg'
import {Job} from "./job/Job";
import {S} from './Portfolio-Styles'
import styled from "styled-components";

export const Portfolio: React.FC = () => {
    return (
        <PortfolioBox id={'portfolio'}>
            <Container>
                <SectionTitleBox>
                    <SectionTitle><span>#</span>Портфолио</SectionTitle>
                    <TitleLine width='50'/>
                    <S.Link>
                        {/*<a href={'#'}>View all ~~&gt;</a>*/}
                    </S.Link>
                </SectionTitleBox>
                <S.Jobs>
                    <Job
                        img={img01}
                        desc={'Стильный электросамокат с мощным аккумулятором'}
                        tags={'HTML SCSS Webpack'}
                        title={'Самокат MI'}
                        hrefView={'https://sergei00026.github.io/Electric-scooter/dist/'}
                        hrefLink={'https://github.com/sergei00026/Electric-scooter'}
                    ></Job>
                    <Job
                        img={img02}
                        desc={'Наша фотостудия позволит исполнить ваши мечты'}
                        tags={'HTML SCSS Webpack Swipper'}
                        title={'Профессиональная фотосессия в студии'}
                        hrefView={'https://sergei00026.github.io/photostudio/dist/'}
                        hrefLink={'https://github.com/sergei00026/photostudio'}
                    ></Job>
                    <Job
                        img={img03}
                        desc={'Travel, enjoy and live a new and full life'}
                        tags={'HTML SCSS Webpack'}
                        title={'Travel'}
                        hrefView={'https://sergei00026.github.io/travel/dist/'}
                        hrefLink={'https://github.com/sergei00026/travel'}
                    ></Job>
                    <Job
                        img={img04}
                        desc={'Лечение и протезирование зубов по Европейским стандартам'}
                        tags={'HTML SCSS Webpack Swipper'}
                        title={'Стоматология'}
                        hrefView={'https://sergei00026.github.io/dentistry/'}
                        hrefLink={'https://github.com/sergei00026/dentistry'}
                    ></Job>
                    <Job
                        img={img05}
                        desc={'Ресторан'}
                        tags={'HTML SCSS Webpack Swipper'}
                        title={'Gerícht'}
                        hrefView={'https://sergei00026.github.io/GERI-CHT/home.html'}
                        hrefLink={'https://github.com/sergei00026/GERI-CHT'}
                    ></Job>
                    <Job
                        img={img06}
                        desc={'Маркетинг, Продажи, Реклама'}
                        tags={'HTML SCSS Webpack'}
                        title={'Комплексный интернет-маркетинг'}
                        hrefView={'https://sergei00026.github.io/House-of-Sites/dist/'}
                        hrefLink={'https://github.com/sergei00026/House-of-Sites'}
                    ></Job>
                    <Job
                        img={img07}
                        desc={'Маркетинг, Застройщик, Дома'}
                        tags={'HTML SCSS Webpack'}
                        title={'Сайт строительной компании'}
                        hrefView={'https://sergei00026.github.io/visina/dist/'}
                        hrefLink={'https://github.com/sergei00026/visina'}
                    ></Job>
                    <Job
                        img={img08}
                        desc={'Маркетинг, Парикмахерская, Косметология'}
                        tags={'HTML SCSS Webpack'}
                        title={'Косметология'}
                        hrefView={'https://sergei00026.github.io/high/dist/'}
                        hrefLink={'https://github.com/sergei00026/high'}
                    ></Job>
                </S.Jobs>
            </Container>
        </PortfolioBox>
    );
};
const PortfolioBox = styled.section`
position: relative`

