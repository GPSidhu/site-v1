import React from 'react'
import {
    PanelContainer,
    Icon,
    CloseIcon,
    PanelWrapper,
    PanelMenu,
    PanelButtonWrapper,
    PanelRoute,
    PanelLink
} from './elements'

const Sidepanel = ({isOpen, toggle}) => {
    return (
        <PanelContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <PanelWrapper>
                <PanelMenu>
                    <PanelLink to="about" onClick={toggle}>About</PanelLink>
                    <PanelLink to="experience" onClick={toggle}>Experience</PanelLink>
                    <PanelLink to="projects" onClick={toggle}>Projects</PanelLink>
                    <PanelLink to="contact" onClick={toggle}>Contact</PanelLink>
                    <PanelButtonWrapper>
                        <PanelRoute to="/resume">
                            Resume
                        </PanelRoute>
                    </PanelButtonWrapper>
                    {/* <PanelButtonWrapper>
                        <PanelRoute to="/blog">
                            Blog
                        </PanelRoute>
                    </PanelButtonWrapper> */}
                </PanelMenu>
            </PanelWrapper>
        </PanelContainer>
    )
}

export default Sidepanel
