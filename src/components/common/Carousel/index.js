import Component from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 100
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
class MyCarousel extends Component {
    render() {
        return (
            <Carousel 
            // centerMode={true}
            // partialVisible={true}
            responsive={responsive}
            swipeable={true}
            draggable={false}
            showDots={true}
            infinite={true}
            autoPlay={false}
            ssr={false}
            renderButtonGroupOutside={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            // autoPlaySpeed={2500}
            // keyBoardControl={true}
            // customTransition="all .5"
            // transitionDuration={500}
            //containerClass="carousel-container"
            //removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            // dotListClass="custom-dot-list-style"
            // itemClass="carousel-item-padding-40-px"
            />
        )
    }
}