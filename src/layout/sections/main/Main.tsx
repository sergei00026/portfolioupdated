import React from 'react';
import photo from '../../../assets/main/photo.png'
import {Link} from "../../../components/link/Link";
import {Icon} from "../../../components/icon/Icon";
import {Points} from "../../../components/points/Points";
import {Container} from "../../../components/container/Container";
import {S} from './Main-Styles'
import Typewriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';

export const Main: React.FC = () => {
    return (

        <S.MainWrapper id={'home'}>
            <Container>
                <S.MainTextBlock>
                    <S.MainTitle>Сергей Королев <br/><span>Front-end developer</span></S.MainTitle>
                    <S.MainDesc>
                        <b>Я Верстальщик / Frontend разработчик. Занимаюсь разработкой сайтов и веб приложений</b>
                        <Typewriter
                            options={{
                                strings: ['Я Frontend разработчик', 'Верстальщик', 'Занимаюсь разработкой сайтов и веб приложений'],
                                autoStart: true,
                                loop: true,
                                delay: 50
                            }}
                        />
                    </S.MainDesc>
                    <Link value={'Позвонить'} href={'tel:89872822244'}/>
                </S.MainTextBlock>
                <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    perspective={900}
                    scale={1.05}
                    transitionSpeed={2000}
                    gyroscope={true}
                >
                    <S.MainImgBox className={'main-img-box'}>
                        <S.DecorMainImgBox>
                            <Icon iconId={'simbol'} width="156" height="156" viewBox="0 0 156 156"/>
                        </S.DecorMainImgBox>
                        <Points quantity={20} width={'84'} height={'84'} wrap={'wrap'} gap={16} right={10} bottom={15}/>

                        <img src={photo} alt="photo"/>

                        <S.ImgLink href="#">
                            Вы можете посмотреть мое <span> портфолио</span>
                        </S.ImgLink>
                    </S.MainImgBox>
                </Tilt>
            </Container>
        </S.MainWrapper>

    );
};

