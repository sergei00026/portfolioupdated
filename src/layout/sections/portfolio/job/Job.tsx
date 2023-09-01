import styled from "styled-components";
import {Theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/link/Link";
import React from "react";
import {S} from '../Portfolio-Styles'

type JobTypeProps = {
    img: string
    tags: string
    title: string
    desc: string
    hrefView: string
    hrefLink: string
}


export const Job:React.FC<JobTypeProps> = (props: JobTypeProps) => {
    return (
        <S.Job>
            <img src={props.img} alt="image"/>
            <S.JobTags>{props.tags}</S.JobTags>
            <S.JobItem>
                <S.JobTitle>{props.title}</S.JobTitle>
                <S.JobDesc>{props.desc}</S.JobDesc>
                <S.JobButtons>
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
                </S.JobButtons>
            </S.JobItem>
        </S.Job>
    )
}

