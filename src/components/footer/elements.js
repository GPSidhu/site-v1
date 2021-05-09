import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterContainer = styled.footer`
    background: ${({theme}) => theme.main.bgFooter};

    a {
        padding-left: 4px;
        text-decoration: none;
        color: ${({theme}) => theme.main.colorSecondary};
        &:hover {
            color: ${({theme}) => theme.main.linkHover};
        }
    }
`

export const FooterWrapper = styled.div`
    padding: 16px 24px;
    dispalay: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 16px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: row;
    aling-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    
    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLink = styled(Link)`
    color: ${({theme}) => theme.main.textPrimary};
    text-decoration: none;
    margin-left: 0.5rem;
    font-size: 14px;
    cursor: pointer;

    &:hover {
        color: ${({theme}) => theme.main.linkHover};
        transition: 0.3s ease-out;
    }
`

export const WebsiteRights = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.main.textPrimary};
    margin-bottom: 16px;
    font-style: italic;
`
