import React  from 'react'
// { useEffect, useState } 

import {
    CoverContainer,
    CoverBg,
    ImageBg,
    Content,
    // ContentH1,
    ContentP,
    BtnWrapper
} from './elements'
import Button from '../../common/Button';

const Cover = ({backgroundColor, backgroundImage, lines, showLink}) => {
    // const [scrollTop, setScrollTop] = useState(false)

    // const updateCoverBg = () => {
    //     let top = window.scrollY || 0;
    //     setScrollTop(top);
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', updateCoverBg)
    // }, [])

    return (
        <div>
            <CoverContainer coverBg={backgroundColor}>
                 {/* top={scrollTop}> */}
                <CoverBg>
                    {backgroundImage && <ImageBg></ImageBg>}
                </CoverBg>
                <Content>
                    {lines && lines.map((line, i) => (
                        <ContentP key={`cp_${i}`} size={line.size}>{line.text}</ContentP>
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
