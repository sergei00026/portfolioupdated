import React from 'react';
import photo from '../../../assets/main/photo.png'
import {Link} from "../../../components/link/Link";
import {Icon} from "../../../components/icon/Icon";
import {Points} from "../../../components/points/Points";
import {Container} from "../../../components/container/Container";
import {S} from './Main-Styles'


export const Main: React.FC = () => {
    return (
        <Container>
            <S.MainWrapper>
                <S.MainTextBlock>
                    <S.MainTitle>Сергей Королев <br/><span>Front-end developer</span></S.MainTitle>
                    <S.MainDesc>Я Верстальщик / Frontend разработчик. Занимаюсь разработкой сайтов и веб приложений
                    </S.MainDesc>
                    <Link value={'Позвонить'} href={'tel:89872822244'}/>
                </S.MainTextBlock>
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
            </S.MainWrapper>
        </Container>
    );
};

