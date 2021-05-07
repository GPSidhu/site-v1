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
    SocialIconLink,
    WebsiteRights
} from './elements'

import {
    SOCIAL_ICON_COMP_MAP
} from '../../constants/icons'

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
                <SocialMedia>
                    <SocialMediaWrapper>
                        {/* <SocialLogo to="/">GS</SocialLogo> */}
                        <WebsiteRights>{`© ${new Date().getFullYear()} ${rights}`}</WebsiteRights>
                        <SocialIcons>
                            {contacts.map((contact, index) => 
                            <SocialIconLink key={`slink_${index}`} href={contact.href} target="_blank" aria-label={contact.label}>
                                {SOCIAL_ICON_COMP_MAP[contact.id]}
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
