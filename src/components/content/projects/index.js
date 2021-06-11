import React from 'react'
import styled from 'styled-components'
import {
    SectionContainer,
    SectionWrapper,
    SectionTitle,
    Card,
    Tooltip,
    Carousel
} from '../../common'
import {
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
    display: grid;
    grid-template-areas: "info snap";
    grid-template-columns: 40% auto;
    grid-auto-rows: 100%;
    margin: 1rem;
    border-radius: 5px;
    padding: 2px;
    position: relative;
    background: linear-gradient(to left, ${({theme}) => theme.main.bgSecondary},
    ${({theme}) => theme.main.bgTertiary});

    .info {
        grid-area: info;
        display: grid;
        grid-template-rows: auto 1fr 1fr;

        .description {
            color: ${({theme}) => theme.main.textSecondary};
        }
        .tech {
            margin-top: 12px;
            color: ${({theme}) => theme.main.colorSecondary};
        }
    }
    .snap {
        grid-area: snap;
        position: absolute;
        width: 100%;
        padding-left: 1rem;
        border-left: 1px solid ${({theme}) => theme.main.colorSecondary};
    }

    @media screen and (max-width: 480px) {
        height: 500px;
        grid-template-areas: "snap" "info" ;
        grid-template-columns: auto;
        grid-auto-rows: 1fr 1fr;
        grid-gap: 12px;
        .snap {
            padding-left: 0;
            padding-top: 1rem;
            border-left: none;
        }
    }
`

const ProjectCover = styled.img`
    max-height: 244px;
    max-width: 500px;
`
const IconsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    > * {
        padding-right: 8px;
    }
`

const IconLink = styled.a`
    color: ${({theme}) => theme.main.colorSecondary};
    font-size: 24px;
    &:hover {
        color: ${({theme}) => theme.main.linkHover};
    }
`

const renderCardFooter = (project) => (
    <IconsWrapper>
            <Tooltip message={"Code"} position={'top'}>
                <IconLink href={project.links.code} target="_blank" aria-label={'Code'}>
                    {SOCIAL_ICON_COMP_MAP['github'].icon}
                </IconLink>
            </Tooltip>
            <Tooltip message={"Demo"} position={'top'}>
                <IconLink href={project.links.demo} target="_blank" aria-label={'Demo'}>
                    <BsBoxArrowUpRight />
                </IconLink>
            </Tooltip>
    </IconsWrapper>
  )

function Projects ({title, projects, id, seq}) {
    return (
        <SectionContainer id={id} seq={seq}>
            <SectionWrapper>
                <SectionTitle>{title}</SectionTitle>
                <ProjectCardWrapper className="project-wrapper">
                    {
                        projects && projects.map((project, index) => (
                            <CardContainer className="project" key={`project_${index}`}>
                                <div className="info">
                                    <Card 
                                        header={<h3>{project.title}</h3>}
                                        footer={renderCardFooter(project)}
                                        style={
                                            {
                                                background: 'transparent',
                                                border: 'none'
                                            }
                                        }
                                    >
                                        <div className="description">{project.description}</div>
                                        {project.technologies && <div className="tech">{project.technologies.join(" • ")}</div>}
                                    </Card>
                                </div>
                                <div className="snap">
                                    <Carousel>
                                        {project.snapshots && 
                                            project.snapshots.map((s, i) => <ProjectCover key={i} src={`/images/projects${s}`} alt='Project Snapshot' />)
                                        }
                                    </Carousel >
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
