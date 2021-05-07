import React from 'react'
import About from './about'
import Cover from './cover'
import Experience from './experience'
import Projects from './projects'
// import { homeObjOne, homeObjThree, homeObjTwo } from './about/Data'

const ContentSection = ({data}) => {
    const {cover, experience, about, projects } = data;
    // const [hover, setHover] = useState(false);

    // const onHover = () => {
    //     setHover(!hover)
    // }

    return (
        <>
        <Cover {...cover} seq={1} />
        <About {...about} seq={2} />
        <Experience {...experience} seq={3} />
        <Projects {...projects} seq={4} />
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
