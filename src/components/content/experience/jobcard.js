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
    width: 80%; //600px;
    display: inline-grid;
`
const CardHeader = styled.div`
    display: flex;
    border-bottom: 1px solid black;
`
const Heading1 = styled.span`
    font-weight: 500;
    color: black;
    font-size: 18px;
    flex: 1;
`
const Heading2 = styled.span`
    font-weight: bold;
    font-size: 16px;
    color: aqua; //#a9b0ad;
    padding-left: 4px;
`

const SkillsWrapper = styled.div`
    display: flex;
    flex-direction: row;
`
const Skill = styled.span`
    font-size: 24px;
    padding-right: 4px;
    color: aqua;
`

const renderCardheader = (job) => (
  <CardHeader>
    <Heading1>{job.designation}</Heading1>
    <Heading2>@{job.company}</Heading2>
  </CardHeader>
)

const renderCardBody = (job) => (
  <div>
    {/* <span>{`${job.from} - ${job.to}`}</span> */}
    <Collapser content={
    <ol>
      {job.tasks.map((t, i) => (<li key={`t_${i}`}>{t}</li>))}
    </ol>} />
  </div>
)

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
                    body={renderCardBody(job)} 
                    footer={renderCardFooter(job)}
                     />
            </CardContainer>
    )
}

export default Jobcard
