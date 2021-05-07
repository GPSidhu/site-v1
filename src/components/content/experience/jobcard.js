import React from 'react'
import styled from 'styled-components'
import {
    Card,
    Collapser,
    Tooltip
} from '../../common'
import {
    SKILL_ICON_COMP_MAP
} from '../../../constants/icons'

const CardContainer = styled.div`
    height: 150px;
    width: 100%;
    display: inline-grid;
`
const CardHeader = styled.div`
    display: flex;
    border-bottom: 1px solid ${({theme}) => theme.main.borderPrimary};
`
const Heading1 = styled.span`
    font-weight: 500;
    color: ${({theme}) => theme.main.textPrimary};
    font-size: 18px;
    flex: 1;
`
const Heading2 = styled.span`
    font-weight: bold;
    font-size: 16px;
    color: ${({theme}) => theme.main.colorSecondary};
    padding-left: 4px;
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid ${({theme}) => theme.main.borderPrimary};
`
const Skill = styled.span`
    font-size: 24px;
    padding-right: 4px;
    color: ${({theme}) => theme.main.textPrimary};
`

const renderCardheader = (job) => (
  <CardHeader>
    <Heading1>{job.designation}</Heading1>
    <Heading2>@{job.company}</Heading2>
  </CardHeader>
)

const renderCardBody = (job) => {
    let expanded = false;
    if (typeof window.innerWidth != 'undefined' && window.innerWidth < 480) {
        expanded = true;
    }
    return (<div>
        <Collapser expanded={expanded} content={
        <ol>
        {job.tasks.map((t, i) => (<li key={`t_${i}`}>{t}</li>))}
        </ol>} />
    </div>)
}

const renderCardFooter = (job) => (
    <SkillsWrapper>
        {job.technologies.map((t, i) => (
            <Tooltip key={`skill_${i}`} message={SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].label} position={'top'}>
                <Skill>
                    {SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].icon}
                </Skill>
            </Tooltip>))}
    </SkillsWrapper>
  )

function Jobcard({job}) {
    return (
             <CardContainer>
                <Card 
                    header={renderCardheader(job)}
                    footer={renderCardFooter(job)}>
                    {renderCardBody(job)}
                </Card>
            </CardContainer>
    )
}

export default Jobcard
