import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'

export const Nav = styled.nav`
    position: fixed;
    background: ${({scrollNav, theme}) =>(scrollNav ? theme.main.bgHeader: 'transparent')};
    width:100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
    transition: background 850ms ease-in, opacity 750ms ease-in-out;

    @media screen and (max-width: 960px) {
        transition: 1s all ease;
    }
    @media screen and (max-width: 768px) {
        height: 64px;
    }
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const Logo = styled(LinkRouter)`
    color: ${({theme}) => theme.main.textPrimary};
    font-family: 'Dancing Script', cursive;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight : bold;
    text-decoration: none;
    &:hover {
        color: ${({theme}) => theme.main.textPrimary};
    }
    @media screen and (max-width: 768px) {
        font-size: 2rem;
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: -16px;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: ${({theme}) => theme.main.textPrimary};
    }

    @media screen and (max-width: 360px), (max-width: 480px) {
        font-size: 1.5rem;
        top: -8px;
    }
`

export const HeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin: 0;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MenuItem = styled.li`
`

export const LinkItem = styled(LinkScroll)`
    color: ${({theme}) => theme.main.textPrimary};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid ${({theme}) => theme.main.textPrimary};
    }
    &:hover {
        color: ${({theme}) => theme.main.linkHover};
    }
`

export const MenuButton = styled.nav`
    display: flex;
    align-items: center;
    padding: 0 1rem;
    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const MenuButtonAnchor = styled.a`
    border-radius: 8px;
    background: 'transparent';
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({theme}) => theme.main.textPrimary};
    font-size: 16px;
    border: 1px dotted ${({theme}) => theme.main.colorSecondary};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        cursor: ne-resize;
        color: ${({theme}) => theme.main.linkHover};
        border: 1px dotted ${({theme}) => theme.main.linkHover};
    }
`

export const MenuButtonLink = styled(LinkRouter)`
    border-radius: 8px;
    background: 'transparent';
    white-space: nowrap;
    padding: 10px 22px;
    color: ${({theme}) => theme.main.textPrimary};
    font-size: 16px;
    border: 1px dotted ${({theme}) => theme.main.colorSecondary};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        cursor: ne-resize;
        color: ${({theme}) => theme.main.linkHover};
        border: 1px dotted ${({theme}) => theme.main.linkHover};
    }
`
