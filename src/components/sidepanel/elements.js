import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'

export const PanelContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${({theme}) => theme.main.bgHeader};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${({theme}) => theme.main.colorPrimary};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 3rem;
    cursor: pointer;
    outline: none;
`

export const PanelWrapper = styled.div`
    color: ${({theme}) => theme.main.bgPrimary};
`

export const PanelMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 100px);
    text-align: center;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 100px);
    }
`

export const PanelLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: ${({theme}) => theme.main.colorPrimary};
    cursor: pointer;
    padding-bottom: 2rem;
    margin-left: -28px;
    &:hover {
        color: ${({theme}) => theme.main.linkHover};;
        transition: 0.2s ease-in-out;
    }
`

export const PanelButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
    font-size: 3rem;
`

export const PanelRoute = styled(LinkRouter)`
    border-radius: 24px;
    width: 300px;
    background: 'transparent';
    border: 1px solid ${({theme}) => theme.main.textPrimary};
    white-space: nowrap;
    padding: 16px;
    text-align: center;
    color: ${({theme}) => theme.main.colorSecondary};
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: ${({theme}) => theme.main.linkHover};
    }
`
