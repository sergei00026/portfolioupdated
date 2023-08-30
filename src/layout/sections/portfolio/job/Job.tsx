import styled from "styled-components";
import {Theme} from "../../../../components/Theme";
import {Link} from "../../../../components/link/Link";
import React from "react";

type JobTypeProps = {
    img: string
    tags: string
    title: string
    desc: string
    hrefView: string
    hrefLink: string
}


export const Job = (props: JobTypeProps) => {
    return (
        <JobStyled>
            <img src={props.img} alt="image"/>
            <JobTags>{props.tags}</JobTags>
            <JobItem>
                <JobTitle>{props.title}</JobTitle>
                <JobDesc>{props.desc}</JobDesc>
                <JobButtons>
                    <Link
                        value={'Смотреть'}
                        href={props.hrefView}
                        target='_blank'
                    />
                    <Link
                        value={'Код'}
                        href={props.hrefLink}
                        target={'_blank'}
                    />
                </JobButtons>
            </JobItem>
        </JobStyled>
    )
}

export const JobStyled = styled.div`
  border: 1px solid ${Theme.colors.secondary};
  align-self: start;

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