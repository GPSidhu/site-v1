import React, { useState } from 'react'
import Sidepanel from '../components/sidepanel'
import Header from '../components/header'
import ContentSection from '../components/content'
// import InfoSection from '../components/content/InfoSection'
import Footer from '../components/footer'

// Import data
// import { homeObjOne, homeObjThree, homeObjTwo } from '../components/content/InfoSection/Data'
import {
    data as footerData
} from '../data/footer'

import {
    data as coverData
} from '../data/cover'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Header toggle={toggle}/>
            <Sidepanel isOpen={isOpen} toggle={toggle}/>
            <ContentSection {...coverData}/>
            {/* <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/> */}
            <Footer {...footerData}/>
        </>
    )
}

export default Home
