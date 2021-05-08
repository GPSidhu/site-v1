import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    WebsiteRights
} from './elements'

const Footer = ({links, contacts, rights}) => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {links.map((item, index) => <FooterLink key={`flink_${index}`} to={item.to}>{item.label}</FooterLink>)}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <WebsiteRights>
                        <small>{`© ${new Date().getFullYear()} ${rights}`}</small>
                </WebsiteRights>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
