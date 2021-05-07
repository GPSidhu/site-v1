import React from 'react'
import styled from 'styled-components'
import Jobcard from './jobcard'
const TimelineContainer = styled.div`
    height: 100%;
    width: 100%;
    min-width: 900px;
    position: relative;
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
    padding: 12px 0;
`
const TimelineSectionWrapper = styled.div`
    width: 100%;
    height: 200px;
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row-reverse;
    align-items: center;
    margin-right: 1rem;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row;
    align-items: center;
    margin-left: 1rem;
`

const Circle = styled.div`
    background: ${({theme}) => theme.main.bgTertiary};;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    top: 45%;
    position: relative;
`

function Timeline({jobs}) {
    return (
        <TimelineContainer>
            <CenterLine />
            {jobs.map((job, index ) => 
                    <TimelineSectionWrapper  key={`section_${index}`}>
                            <LeftContainer>
                            {(index % 2) ?
                                <Jobcard key={`exp_card_${index}`} job={job}/> :
                                <div><span>{`${job.from} - ${job.to}`}</span></div>
                            }
                            </LeftContainer>                        
                            <Circle />
                            <RightContainer>
                                {!(index % 2) ?
                                <Jobcard key={`exp_card_${index}`} job={job}/> :
                                <div><span>{`${job.from} - ${job.to}`}</span></div>
                                }
                            </RightContainer>
                    </TimelineSectionWrapper>
                )
            }
        </TimelineContainer>
    )
}

export default Timeline
