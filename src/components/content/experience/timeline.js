import React from 'react'
import styled from 'styled-components'
import Jobcard from './jobcard'
const TimelineContainer = styled.div`
    height: 100%;
    width: 100%;
    min-width: 900px;
    position: relative;
    //border: 2px solid red;
`
const CenterLine = styled.div`
    border: 2px solid aqua;
    height: 75%;
    min-height: 600px;
    width: 2px;
    position: absolute;
    align-items: center;
    left: 50%;
    //top: 24px;
    padding: 12px 0;
`
const TimelineSectionWrapper = styled.div`
    width: 100%;
    height: 200px;
    //border: 1px dotted yellow;
    //position: absolute;
    display: grid;
    grid-template-columns: 1fr 20px 1fr;
    //flex-direction: column;
`

const LeftContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row-reverse;
    align-items: center; //flex-end;
    margin-right: 1rem;
`

const RightContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-flow: row;
    align-items: center; //flex-end;
    margin-left: 1rem;
`

const Circle = styled.div`
    background: aqua;
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
