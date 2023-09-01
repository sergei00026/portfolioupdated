import React from 'react';
import {S} from '../Skills-Styles'


type SkillPropsType = {
    title: string
    subTitle: string
}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.StyledSkill>
            <S.SkillTitle>{props.title}</S.SkillTitle>
            <S.SkillSubTitle>{props.subTitle}</S.SkillSubTitle>
        </S.StyledSkill>
    );
};
