import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLink,
    SocialMedia,
    SocialMediaWrapper,
    SocialIcons,
    // SocialLogo,
    SocialIconLink,
    WebsiteRights
} from './elements'

import {
    ICON_COMPONENT_MAP
} from '../../constants/icons'

const Footer = ({links, contacts, rights}) => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            {links.map((item) => <FooterLink to={item.to}>{item.label}</FooterLink>)}
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrapper>
                        {/* <SocialLogo to="/">GS</SocialLogo> */}
                        <WebsiteRights>{`© ${new Date().getFullYear()} ${rights}`}</WebsiteRights>
                        <SocialIcons>
                            {contacts.map((contact) => 
                            <SocialIconLink href={contact.href} target="_blank" aria-label={contact.label}>
                                {ICON_COMPONENT_MAP[contact.id]}
                            </SocialIconLink>
                            )}
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
