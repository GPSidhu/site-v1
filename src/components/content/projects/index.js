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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem;
    border-radius: 5px;
    padding: 2px;
    position: relative;
    background: linear-gradient(to left, ${({theme}) => theme.main.bgSecondary},
    ${({theme}) => theme.main.bgTertiary});

    .left {
        display: grid;
        grid-template-rows: 2fr 1fr;
        width: 40%;
        height: 100%;
        padding-right: 1rem;
    }
    .right {
        position: absolute;
        width: 60%;
        right: 0;
        padding-left: 1rem;
        border-left: 1px solid ${({theme}) => theme.main.colorSecondary};

        :before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.3) 100%),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
            z-index: 2;
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
    color: ${({theme}) => theme.main.textPrimary};
    font-size: 24px;
    &:hover {
        color: ${({theme}) => theme.main.linkHover};
    }
`

const renderCardFooter = (project) => (
    <IconsWrapper>
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
    </IconsWrapper>
  )

function Projects ({title, projects, seq}) {
    return (
        <SectionContainer id={'projects'} seq={seq}>
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
                                        style={
                                            {
                                                background: 'transparent',
                                                border: 'none'
                                            }
                                        }
                                    >{project.description}</Card>
                                </div>
                                <div className="right">
                                    <Carousel>
                                        {project.snapshots && 
                                            project.snapshots.map((s, i) => <ProjectCover key={i} src={`/images/projects${s}`} alt='Project Snapshot' />)
                                        }
                                    </Carousel >
                                </div>
                                <hr/>
                            </CardContainer>
                        ))
                    }
                </ProjectCardWrapper>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Projects
