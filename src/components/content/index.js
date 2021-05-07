import React from 'react'
import About from './about'
import Cover from './cover'
import Experience from './experience'
import Projects from './projects'

const ContentSection = ({data}) => {
    const {cover, experience, about, projects } = data;
    return (
        <>
        <Cover {...cover} seq={1} />
        <About {...about} seq={2} />
        <Experience {...experience} seq={3} />
        <Projects {...projects} seq={4} />
        </>
    )
}

export default ContentSection
