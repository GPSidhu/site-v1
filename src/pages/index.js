import React, { useState } from 'react'
import Sidepanel from '../components/sidepanel'
import Header from '../components/header'
import Content from '../components/content'
// import InfoSection from '../components/content/InfoSection'
import Footer from '../components/footer'

// Import data
// import {
//     data as footerData
// } from '../data/footer'
// import {
//     data as coverData
// } from '../data/cover'

// import {
//     data as experienceData
// } from '../data/experience'
// import {
//     data as aboutData
// } from '../data/about'
// import {
//     data as projectsData
// } from '../data/projects'

import {
    CoverData,
    AboutData,
    ExperienceData,
    ProjectsData,
    FooterData
} from '../data'

const data = {
    cover: CoverData,
    experience: ExperienceData,
    about: AboutData,
    projects: ProjectsData
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
            <Footer {...FooterData}/>
        </>
    )
}

export default Home
