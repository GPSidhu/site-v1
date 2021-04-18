import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'

import {
    Nav,
    HeaderContainer,
    LinkItem,
    Logo,
    HeaderMenu,
    MenuItem,
    MobileIcon,
    MenuButton,
    MenuButtonLink
} from './elements'


const menuItems = [
    {id: 'about', label: 'About', type: 'link'},
    {id: 'experience', label: 'Experience', type: 'link'},
    {id: 'projects', label: 'Projects', type: 'link'},
    {id: 'contact', label: 'Contact', type: 'link'},
    {id: 'resume', label: 'Resume', type: 'button'},
    {id: 'blog', label: 'Blog', type: 'button'}
]
const Header = ({toggle}) => {
    const [scrollNav, setScrollnav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80)
            setScrollnav(true)
        else
            setScrollnav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return (
    <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <HeaderContainer>
                    <Logo to="/" onClick={toggleHome}>GS</Logo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <HeaderMenu>
                        {
                            menuItems.map((item) => {
                                if (item.type === 'link')
                                    return (<MenuItem>
                                            <LinkItem to={item.id}>{item.label}</LinkItem>
                                        </MenuItem>)
                                
                                if (item.type === 'button')
                                    return (<MenuButton>
                                        <MenuButtonLink to={item.id}>{item.label}</MenuButtonLink>
                                    </MenuButton>)
                                return []
                            })
                        }
                    </HeaderMenu>
                </HeaderContainer>
            </Nav>
        </IconContext.Provider>
    </>
    )
}

export default Header
