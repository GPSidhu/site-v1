import { Component } from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
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
              responsive={responsive}
              swipeable={true}
              draggable={false}
              showDots={false}
              infinite={true}
              ssr={false}
              renderButtonGroupOutside={false}
              autoPlay={true}
              autoPlaySpeed={3500}
              removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}>
                {this.props.children}
            </Carousel>
        )
    }
}

export default MyCarousel
