import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const SkillsBody = styled.div`
  display: grid;
  
  min-height: 280px;
  @media ${Theme.media.tabletMin} {
    grid-template-columns: 6fr 6fr;
  }
`

const SkillsBoxIcons = styled.div`
  display: none;
  @media ${Theme.media.tabletMin} {
    display: flex;
    gap: 32px;
    justify-content: space-evenly;
    flex-wrap: wrap;
    position: relative;

    svg {
      position: absolute;
      left: 1%;
      bottom: 1%;
    }

  }
`

const SkillsBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 16px;
  flex-wrap: wrap;
  @media ${Theme.media.tablet} {
    justify-content: center;
  }
`


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

export const S ={
    SkillsBody,
    SkillsBoxIcons,
    SkillsBox,
    StyledSkill,
    SkillTitle,
    SkillSubTitle,
}