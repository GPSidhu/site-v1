import React from 'react'
import About from './about'
import Cover from './cover'
import Experience from './experience'
import Projects from './projects'
import Contact from './contact'

const ContentSection = ({data}) => {
    const {cover, experience, about, projects, contact } = data;
    return (
        <>
        <Cover {...cover} seq={1} />
        <About {...about} seq={2} />
        <Experience {...experience} seq={3} />
        <Projects {...projects} seq={4} />
        <Contact {...contact} seq={5} />
        </>
    )
}

export default ContentSection
