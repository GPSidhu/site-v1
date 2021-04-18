import React, { useState } from 'react'
import Sidepanel from '../components/sidepanel'
import Header from '../components/header'
import Content from '../components/content'
// import InfoSection from '../components/content/InfoSection'
import Footer from '../components/footer'

// Import data

import {
    data as footerData
} from '../data/footer'

import {
    data as coverData
} from '../data/cover'

import {
    data as experienceData
} from '../data/experience'

const data = {
    cover: coverData,
    experience: experienceData
}

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <Header toggle={toggle}/>
            <Sidepanel isOpen={isOpen} toggle={toggle}/>
            <Content data={data}/>
            <Footer {...footerData}/>
        </>
    )
}

export default Home
