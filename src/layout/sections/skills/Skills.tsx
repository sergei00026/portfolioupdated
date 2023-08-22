import React from 'react';
import styled from "styled-components";
import {TitleLine} from "../../../components/titleLine/TitleLine";
import {Skill} from "./skill/Skill";
import {Icon} from "../../../components/icon/Icon";
import {Square} from "../../../components/square/Square";
import {SectionTitle, SectionTitleBox} from "../../../components/sectionTitleBox/SectionTitleBox";

export const Skills = () => {
    return (
        <StyledSkills>
            <SectionTitleBox>
                <SectionTitle><span>#</span>Навыки</SectionTitle>
                <TitleLine width='50'/>
            </SectionTitleBox>
            <SkillsBody>
                <SkillsBoxIcons>
                    <Icon iconId={'simbol-small'} width="114" height="114" viewBox="0 0 114 114"  />
                    <Square length={'86'}/>
                    <Square length={'52'}/>
                </SkillsBoxIcons>
                <SkillsBox>
                    <Skill title={'Languages'} subTitle={'TypeScript JavaScript'}/>
                    <Skill title={'Tools'} subTitle={'VSCode Figma Git Font Awesome'}/>
                    <Skill title={'Other'} subTitle={'HTML CSS SCSS REST Webpack'}/>
                    <Skill title={'Frameworks'} subTitle={'React Vue'}/>
                </SkillsBox>
            </SkillsBody>
        </StyledSkills>
    );
};


const StyledSkills = styled.section`
  padding-top: 70px;
`

const SkillsBody = styled.div`
  display: grid;
  grid-template-columns: 6fr 6fr;
  min-height: 280px;
`

const SkillsBoxIcons = styled.div`
  display: flex;
  gap: 32px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  
`

const SkillsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  flex-wrap: wrap;
`