import React from 'react'
import styled from 'styled-components'
import {
    SectionContainer,
    SectionWrapper
} from '../../common'
import {
    SOCIAL_ICON_COMP_MAP
} from '../../../constants/icons'

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 24px;
`

export const Heading = styled.h3`
    margin-bottom: 24px;
    line-height: 1.1;
    font-weight 600;
    color: ${({theme}) => theme.main.textSecondary};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Description = styled.p`
    max-width: 400px;
    font-size: 14px;
    text-align: center;
    line-height: 24px;
    color: ${({theme}) => theme.main.textPrimary}
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 24px 0;
`

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`

export const SocialIconLink = styled.a`
    color: ${({theme}) => theme.main.textPrimary};
    font-size: 44px;
    &:hover {
        color: ${({theme}) => theme.main.linkHover};
    }
    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const ButtonWrapper = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
`

export const ButtonLink = styled.a`
    border-radius: 8px;
    background: 'transparent';
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({theme}) => theme.main.colorSecondary};
    font-size: 16px;
    border: 1px dotted ${({theme}) => theme.main.colorSecondary};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: ${({theme}) => theme.main.linkHover};
        border: 1px dotted ${({theme}) => theme.main.linkHover};
    }
`

function Contact({
    id,
    title,
    headline,
    description,
    contacts,
    email,
    buttonLabel,
    seq
 }) {
    return (
            <SectionContainer seq={seq} id={id}>
                <SectionWrapper>
                    <TextWrapper>
                        <Heading>{headline}</Heading>
                        <Description>{description}</Description>
                    </TextWrapper>
                    <SocialMediaWrapper>
                        <SocialIcons>
                            {contacts && contacts.map((contact, index) => 
                            <SocialIconLink key={`slink_${index}`} href={contact.href} target="_blank" aria-label={contact.label}>
                                {SOCIAL_ICON_COMP_MAP[contact.id]}
                            </SocialIconLink>
                            )}
                        </SocialIcons>
                    </SocialMediaWrapper>
                    <ButtonWrapper>
                        <ButtonLink href={`mailto: ${email}`}>{buttonLabel}</ButtonLink>
                    </ButtonWrapper>
                </SectionWrapper>
            </SectionContainer>
    )
}

export default Contact
