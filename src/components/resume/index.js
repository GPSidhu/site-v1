import { render } from '@testing-library/react'
import React from 'react'

import { 
    FaGithub,
    FaLinkedin,
    FaHome
} from 'react-icons/fa'

import {
    MdEmail,
    MdPhone
} from 'react-icons/md'

import {
    ResumeContainer,
    ResumeWrapper,
    ResumeHeader,
    AvatarContainer,
    InfoContainer,
    Avatar,
    Triangle,
    Img,
    Title,
    SubTitle,
    Description,
    ContactInfo,
    ContactChannel,
    ContactChannelText,
    // Body
    ResumeBody,
    LeftColumn,
    RightColumn,
    ModuleContainer,
    ModuleTitle,
    ModuleContent,
    Skill,
    ModuleSectionTitle,
    SkillNested,
    ModuleSubtitle,
    ModuleTopLine,
    HighlightedText,
    PlainText,
    ModuleContentLine,
    ModuleSectionHeading1,
    ModuleSectionHeading2
} from './elements'

const iconMap = {
    email: <MdEmail/>,
    phone: <MdPhone/>,
    site: <FaHome/>,
    linkedin: <FaLinkedin/>,
    github: <FaGithub/>
}

const renderSkillsNested = (skills) => {
    if (skills && skills.sections)
        return skills.sections.map((section, i) => 
        (<>
            <ModuleSectionTitle key={i}>{section.title}</ModuleSectionTitle>
            <SkillNested key={i+'_skill'}>{section.values.join(', ')}</SkillNested>
        </>
        )
        )
    
    return []
}

const renderSkillsFlat = (skills) => {
    let allSkills = [];
    skills && skills.sections && skills.sections.forEach((section) => {
        allSkills = allSkills.concat(section.values)
    })
    return allSkills.map((s, i) => (<Skill key={i}>{s}</Skill>))
}

const renderSkills = (skills) => {
    if (skills && skills.flat)
        return renderSkillsFlat(skills);

    return renderSkillsNested(skills);
}

const renderExperience = (experience) => {
    if (experience && experience.jobs)
        return experience.jobs.map((job, i) => (
            <>
                <ModuleSubtitle>
                    <ModuleSectionHeading1>{job.designation}</ModuleSectionHeading1>
                    <ModuleSectionHeading2>@{job.company}</ModuleSectionHeading2>
                </ModuleSubtitle>
                <ModuleTopLine>
                    <HighlightedText>{job.from} - {job.to}</HighlightedText>
                    <HighlightedText>{job.location}</HighlightedText>
                </ModuleTopLine>
                <ModuleContent>
                    {job.tasks && job.tasks.map((t) => (
                        <ModuleContentLine>{t}</ModuleContentLine>
                    ))}
                </ModuleContent>
            </>
        ))
}

const renderProjects = (projects) => {
    if (projects)
        return projects.map((project, i) => (
            <>
                <ModuleSubtitle>
                    <ModuleSectionHeading1>{project.title}</ModuleSectionHeading1>
                </ModuleSubtitle>
                <ModuleContent>
                    <ModuleContentLine>{project.description}</ModuleContentLine>
                </ModuleContent>
            </>
        ))
}

const renderEducation = (education) => {
    if (education)
    return education.map((e) => (
        <>
        <ModuleSectionHeading1>{e.school}</ModuleSectionHeading1>
        <ModuleTopLine>
            <HighlightedText>{e.from} - {e.to}</HighlightedText>
            <HighlightedText>{`${e.city}, ${e.state}, ${e.country}`}</HighlightedText>
        </ModuleTopLine>
        <ModuleTopLine>
            <PlainText>{e.course}</PlainText>
            <PlainText>{e.discipline}</PlainText>
            <HighlightedText>{`(${e.grade}${e.maxGrade ? `/${e.maxGrade}` : ''})`}</HighlightedText>
        </ModuleTopLine>
        </>
    ))
}
export function Resume({title, subTitle, description, avatar, contacts, skills, experience, projects, education}) {
    return (
        <ResumeContainer>
            <ResumeWrapper>
                <ResumeHeader>
                    <AvatarContainer>
                        <Triangle />
                        <Avatar>
                            <Img src={`/images/${avatar}`} ></Img>
                        </Avatar>
                    </AvatarContainer>
                    <InfoContainer>
                        <Title>{title}</Title>
                        <SubTitle>{subTitle}</SubTitle>
                        <Description key='description'>{description}</Description>
                        <ContactInfo key='contact_info'>
                            {contacts.map((contact, i) => (
                                    <ContactChannel >
                                        {iconMap[contact.type]}
                                        <ContactChannelText>{contact.value}</ContactChannelText>
                                    </ContactChannel>
                                )
                            )}
                        </ContactInfo>
                    </InfoContainer>
                </ResumeHeader>
                <ResumeBody>
                    <LeftColumn>
                        <ModuleContainer>
                            <ModuleTitle>{experience.title}</ModuleTitle>
                            {renderExperience(experience)}
                        </ModuleContainer>
                    </LeftColumn>
                    <RightColumn>
                        <ModuleContainer>
                            <ModuleTitle>Skills</ModuleTitle>
                            {renderSkills(skills)}
                        </ModuleContainer>
                        <ModuleContainer>
                            <ModuleTitle>Projects</ModuleTitle>
                            {renderProjects(projects)}
                        </ModuleContainer>
                        <ModuleContainer>
                            <ModuleTitle>Education</ModuleTitle>
                            {renderEducation(education)}
                        </ModuleContainer>
                    </RightColumn>
                </ResumeBody>
            </ResumeWrapper>
        </ResumeContainer>
    )
}

// export default Resume
