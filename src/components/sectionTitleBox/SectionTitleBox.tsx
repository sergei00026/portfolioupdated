import styled from "styled-components";
import {Fsz} from "../../styles/Common";

export const SectionTitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 30px;
  flex-wrap: wrap;
`
export const SectionTitle = styled.h2`
  font-size: 32px;
  ${Fsz({fMax: 32, fMin: 20})}
  font-weight: 500;

  span {
    color: #C778DD;
  }
`