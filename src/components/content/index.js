import React, { useState } from 'react'
import Cover from './cover'
import Experience from './experience'
import InfoSection from './InfoSection'

import { homeObjOne, homeObjThree, homeObjTwo } from './InfoSection/Data'

const ContentSection = ({data}) => {
    const {cover, experience } = data;
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <>
        <Cover {...cover}/>
        <InfoSection {...homeObjOne}/>
        <Experience />
        </>
    )
    // return (
    //     <ContentContainer>
    //         <ContentBg>
    //             <VideoBg muted loop autoPlay src={video} type='video/mp4'></VideoBg> */}
    //             <ImageBg src={BackgroundImage}></ImageBg>
    //         </ContentBg>
    //         <Content>
    //             <ContentH1>About</ContentH1>
    //             <ContentP>
    //                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
    //             </ContentP>
    //             <BtnWrapper>
    //                 <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} >
    //                     Get in touch {hover ? <ArrowForward /> : <ArrowRight/>}
    //                 </Button>
    //             </BtnWrapper>
    //         </Content>
    //     </ContentContainer>
    // )
}

export default ContentSection
