import React from 'react'
import styled from 'styled-components'
import {
    SectionContainer,
    SectionWrapper,
    SectionTitle,
} from '../../common'

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: 40% auto; //minmax(auto, 1fr);
    align-items: flex-start;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2
    col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1'
        'col2'` : `'col1 col1' 'col2 col2'`)}
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const TopLine = styled.p`
    color: aqua; //#fff; //#01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa': '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')}
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 780px) {
        justify-content: flex-start;
    }
`

export const Img = styled.img`
    width: 50%;
    border: 2px solid aqua;
    border-radius: 50%;
    margin: 0 0 10px 0;
    padding-right: 0;
    @media screen and (max-width: 480px) {
        width: 70%;
    }
`

function InfoSection({ 
    lightBg,
    darkText,
    id,
    lightText,
    topLine,
    headline,
    description,
    buttonLabel,
    img,
    alt,
    imgStart,
    primary,
    dark,
    dark2
 }) {
    return (
        <>
            <SectionContainer lightBg={lightBg} id={id}>
                <SectionWrapper>
                    {/* <SectionTitle>{topLine}</SectionTitle> */}
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <ImgWrap>
                                <Img src={`/images/${img}`} alt={alt}></Img>
                            </ImgWrap>
                        </Column1>
                        <Column2>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>
                        </TextWrapper>
                        </Column2>
                    </InfoRow>
                </SectionWrapper>
            </SectionContainer>
        </>
    )
}

export default InfoSection
