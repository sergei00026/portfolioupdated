import React from 'react';
import styled from "styled-components";
import {Container} from "../../../../components/container/Container";

type SkillPropsType = {
    title: string
    subTitle: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillSubTitle>{props.subTitle}</SkillSubTitle>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid #ABB2BF;
  max-width: 178px;
  align-self: flex-start;
`

const SkillTitle = styled.div`
  padding: 8px;
  border-bottom: 1px solid #ABB2BF;
`

const SkillSubTitle = styled.div`
  padding: 8px;
  color: #ABB2BF;
  line-height: 200%;
`