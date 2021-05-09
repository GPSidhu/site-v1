import React  from 'react'
// { useEffect, useState } 

import {
    CoverContainer,
    CoverBg,
    ImageBg,
    Content,
    Quote,
    Author,
    BtnWrapper,
    ArrowDownward
} from './elements'
import Button from '../../common/Button';

const Cover = ({backgroundColor, backgroundImage, quotes}) => {
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
            <CoverContainer>
                <CoverBg>
                    {backgroundImage && <ImageBg></ImageBg>}
                </CoverBg>
                <Content>
                    {quotes && quotes.map((q, i) => (
                        <div key={`q_${i}`} >
                            <Quote size={q.size}>{q.text}</Quote>
                            <Author size={q.size}><span>{`- ${q.author}`}</span></Author>
                        </div>
                    ))}
                </Content>
                {/* <BtnWrapper>
                    <Button >
                        <ArrowDownward />
                    </Button>
                </BtnWrapper> */}
            </CoverContainer>
        </div>
    )
}

export default Cover
