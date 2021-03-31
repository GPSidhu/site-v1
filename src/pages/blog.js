import React, { useState } from 'react'
import Header from '../components/header'

const Blog = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Header toggle={toggle}/>
            Blogs
        </div>
    )
}

export default Blog
