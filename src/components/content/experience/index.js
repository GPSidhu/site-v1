import React from 'react'
import {
    SectionContainer,
    SectionWrapper,
    SectionTitle,
} from '../../common'
import Timeline from './timeline'


const Experience = ({title, jobs, seq}) => {
    return (
        <SectionContainer id={'experience'} seq={seq}>
            <SectionWrapper>
                <SectionTitle>{title}</SectionTitle>
                <Timeline jobs={jobs}/>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Experience
