import React from 'react'
import styled from 'styled-components'
import {
    SectionContainer,
    SectionWrapper,
    SectionTitle,
} from '../../common'
import Timeline from './timeline'


const Experience = ({title, jobs}) => {
    return (
        <SectionContainer id={'experience'}>
            <SectionWrapper>
                <SectionTitle>{title}</SectionTitle>
                <Timeline jobs={jobs}/>
            </SectionWrapper>
        </SectionContainer>
    )
}

export default Experience
