import styled from "styled-components";
import {Theme} from "../../../styles/Theme";

const Link = styled.div`
  margin-left: auto;
  font-weight: 500;
  display: flex;
  align-items: center;

  a {
    transition: 0.3s;

    &:hover {
      transform: scale(1.1);
    }
  }

`

const Jobs = styled.div`
  //display: grid;
  //grid-template-columns: repeat(auto-fill, minmax(250px, 320px));
  gap: 16px;
  column-count: 3;
  justify-content: center;
  @media ${Theme.media.pc}{
    column-count: 2;
  }
  @media screen and  (max-width: 600px){
    column-count: 1;
  }
`

const Job = styled.div`
  border: 1px solid ${Theme.colors.secondary};
  align-self: start;
  &:not(:last-child){
    margin-bottom: 16px;
  }

  > img {
    max-width: 100%;
    border-bottom: 1px solid ${Theme.colors.secondary};
  }
`
const JobTags = styled.div`
  padding: 8px;
  color: ${Theme.colors.secondary};
  border-bottom: 1px solid ${Theme.colors.secondary};

`
const JobItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`
const JobTitle = styled.h4`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 16px;
`
const JobDesc = styled.p`
  color: ${Theme.colors.secondary};
  margin-bottom: 16px;
`
const JobButtons = styled.div`
  display: flex;
  gap: 16px;
`

export const S ={
    Link,
    Jobs,
    Job,
    JobTags,
    JobItem,
    JobTitle,
    JobDesc,
    JobButtons
}
