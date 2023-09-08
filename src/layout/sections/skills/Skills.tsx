import React from 'react';
import styled from "styled-components";
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {Skill} from "./skill/Skill";
import {Icon} from "../../../components/icon/Icon";
import {Square} from "../../../components/square/Square";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";
import {Container} from "../../../components/container/Container";
import {Points} from "../../../components/points/Points";
import {S} from './Skills-Styles'
import {Fade} from "react-awesome-reveal";

const skillsAll = [
    {
        id: 1,
        title: 'Languages',
        subTitle: 'TypeScript JavaScript',
    },
    {
        id: 2,
        title: 'Tools',
        subTitle: 'VSCode Figma Git Font Awesome',
    },
    {
        id: 3,
        title: 'Other',
        subTitle: 'HTML CSS SCSS REST Webpack',
    },
    {
        id: 4,
        title: 'Frameworks',
        subTitle: 'React Vue',
    },
]

export const Skills: React.FC = () => {
    return (
        <SkillsBox id={'aboutMe'}>
            <Container>
                <SectionTitleBox>
                    <SectionTitle><span>#</span>Навыки</SectionTitle>
                    <TitleLine width='50'/>
                </SectionTitleBox>
                <S.SkillsBody>
                    <S.SkillsBoxIcons>
                        <Icon iconId={'simbol-small'} width="114" height="114" viewBox="0 0 114 114"/>
                        <Square length={'86'} top={2} right={15}/>
                        <Square length={'52'} right={10} bottom={15}/>
                        <Points quantity={25} width={'63'} height={'63'} wrap={'wrap'} gap={10.75} top={5} left={5}/>
                        <Points quantity={25} width={'63'} height={'63'} wrap={'wrap'} gap={10.75} top={45} left={45}/>
                    </S.SkillsBoxIcons>

                    <S.SkillsBox>
                        <Fade cascade={true} damping={0.2}>
                            {skillsAll.map(s => {
                                return <Skill title={s.title} subTitle={s.subTitle} key={s.id}/>
                            })}
                        </Fade>
                    </S.SkillsBox>
                </S.SkillsBody>
            </Container>
        </SkillsBox>
    );
};

const SkillsBox = styled.section`
  position: relative;`