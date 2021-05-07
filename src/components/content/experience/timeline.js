import React from 'react'
import styled from 'styled-components'
import Jobcard from './jobcard'
const TimelineContainer = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 0 2rem;
    @media screen and (max-width: 480px) {
        padding: 0 12px;
    }
`
const CenterLine = styled.div`
    border: 2px solid ${({theme}) => theme.main.bgTertiary};
    border-radius: 4px;
    height: 75%;
    min-height: 600px;
    width: 2px;
    position: absolute;
    align-items: center;
    left: 50%;
    margin-left: -2px;
    padding: 12px 0;

    @media screen and (max-width: 480px) {
        left: 24px;
        height: 100%;
    }
`
const TimelineSectionWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-areas: ${({index}) => index % 2 === 0 ? `"dur circle card"` : `"card circle dur"`};
    grid-template-columns: 1fr 24px 1fr;
    grid-gap: 10px;

    .job-card {
        grid-area: card;
    }
    .duration {
        grid-area: dur;
    }
    .circle {
        grid-area: circle;
    }
    
    @media screen and (max-width: 480px) {
        min-height: 480px;
        grid-template-areas: "circle dur" ". card";
        grid-template-columns: 24px 1fr;
        grid-template-rows: 44px 1fr;
    }

    @media screen and (max-width: 375px) {
        min-height: 580px;
    }
`

const GridItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: ${({pos}) => pos === "left" ? "row": "row-reverse"};
    align-items: center;

    @media screen and (max-width: 480px) {
        flex-flow: row;
        align-items: flex-start;
        margin-top: 24px;
    }
`

const Circle = styled.div`
    background: ${({theme}) => theme.main.bgTertiary};
    border-radius: 50%;
    height: 24px;
    width: 24px;
`
const Duration = styled.div`
    color: ${({theme}) => theme.main.colorSecondary};
`

function Timeline({jobs}) {
    return (
        <TimelineContainer>
            <CenterLine />
            {jobs.map((job, index ) => 
                    <TimelineSectionWrapper  index={index} key={`section_${index}`}>  
                            <GridItemContainer className="duration" pos={index % 2 ? 'left' : 'right'}>
                                <Duration>
                                    <span>{`${job.from} - ${job.to}`}</span>
                                </Duration>
                            </GridItemContainer>
                            <GridItemContainer className="circle" pos={index % 2 ? 'left' : 'right'}>
                                <Circle />
                            </GridItemContainer>
                            <GridItemContainer className="job-card" pos={index % 2 ? 'right' : 'left'}>
                                <Jobcard key={`exp_card_${index}`} job={job}/>
                            </GridItemContainer>
                    </TimelineSectionWrapper>
                )
            }
        </TimelineContainer>
    )
}

export default Timeline
