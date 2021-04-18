import React from 'react'
import {
    CoverContainer,
    CoverBg,
    ImageBg,
    Content,
    ContentH1,
    ContentP,
    BtnWrapper
} from './elements'
import Button from '../../common/Button';

const Cover = ({backgroundColor, backgroundImage, lines, showLink}) => {
    return (
        <div>
            <CoverContainer coverBg={backgroundColor}>
                <CoverBg>
                    {backgroundImage && <ImageBg src={backgroundImage}></ImageBg>}
                </CoverBg>
                <Content>
                    {lines && lines.map((line, i) => (
                        <ContentP size={line.size}>{line.text}</ContentP>
                    ))}
                    {/* <ContentH1>About</ContentH1> */}
                    {showLink && 
                    <BtnWrapper>
                        <Button >
                           Explore 
                        </Button>
                    </BtnWrapper>
                    }
                </Content>
            </CoverContainer>
        </div>
    )
}

export default Cover
