import React from 'react'
import styled from 'styled-components'
import {
    SectionContainer,
    SectionWrapper,
    SectionTitle,
    Card,
    Tooltip
} from '../../common'
import {
    SKILL_ICON_COMP_MAP,
    SOCIAL_ICON_COMP_MAP
} from '../../../constants/icons'
import {
    BsBoxArrowUpRight
} from 'react-icons/bs'

const ProjectCardWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    max-width: 1100px;
    flex-wrap: wrap;
`
const CardContainer = styled.div`
    height: 250px;
    width: 100%;
    display: flex; //inline-grid;
    margin: 1rem;
    background: transparent; //#fff;
    border-radius: 5px;
    padding: 4px;
    position: relative;

    .left {
        position: absolute;
        display: grid;
        grid-template-rows: 2fr 1fr;
        width: 30%;
        padding: 1rem;
    }
    .right {
        // display: block;
        // width: 70%;
        // height: 100%;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        overflow: hidden;
        display: flex;
        justify-content: flex-end;

        // :before {
        //     content: '';
        //     position: absolute;
        //     top: 0;
        //     left: 0;
        //     right: 0;
        //     bottom: 0;
            
        //     linear-gradient(180deg, rgba(0,255,255, 0.2) 0%, transparent 100%);
        //     z-index: 2;
        // }
    }
`

const ProjectCover = styled.img`
    width: 70%;
    heigth: 100%;
`
const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;

    > * {
        padding-right: 8px;
    }
`

const Skill = styled.span`
    font-size: 24px;
    padding-right: 4px;
    color: aqua;
`
const IconLink = styled.a`
    color: aqua;
    font-size: 24px;
`

const renderCardFooter = (project) => (
    <IconsWrapper>
        {/* { */}
        {/* // project.links.map((t, i) => (
            // <Tooltip key={`skill_${i}`} message={SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].label} position={'top'}>
            //     <Skill>
            //         {SKILL_ICON_COMP_MAP[t] && SKILL_ICON_COMP_MAP[t].icon}
            //     </Skill>
            // </Tooltip> */}
            <Tooltip message={"Code"} position={'top'}>
                <IconLink href={project.links.code} target="_blank" aria-label={'Code'}>
                    {SOCIAL_ICON_COMP_MAP['github']}
                </IconLink>
            </Tooltip>
            <Tooltip message={"Demo"} position={'top'}>
                <IconLink href={project.links.demo} target="_blank" aria-label={'Demo'}>
                    <BsBoxArrowUpRight />
                </IconLink>
            </Tooltip>
        {/* //    )) */}
        {/* } */}
    </IconsWrapper>
  )

function Projects ({lightBg, title, projects}) {
    return (
        <SectionContainer id={'projects'} lightBg={lightBg}>
            <SectionWrapper>
                <SectionTitle>{title}</SectionTitle>
                <ProjectCardWrapper>
                    {
                        projects && projects.map((project, index) => (
                            <CardContainer key={`project_${index}`}>
                                <div className="left">
                                <Card className="card"
                                    header={<h3>{project.title}</h3>}
                                    footer={renderCardFooter(project)}
                                >{project.description}</Card>
                                </div>
                                <div className="right">
                                    {project.cover && <ProjectCover src={`/images/projects${project.cover}`}alt='Project Snapshot' /> }
                                </div>
                            </CardContainer>
                        ))
                    }
                </ProjectCardWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Projects
