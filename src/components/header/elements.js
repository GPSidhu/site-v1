import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import * as COLORS from '../../constants/colors';

export const Nav = styled.nav`
    position: fixed;
    background: ${({scrollNav}) => (scrollNav ? COLORS.BLACK : 'transparent')};
    width:100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    //position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
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
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight : bold;
    text-decoration: none;
    &:hover {
        color: ${COLORS.LINKHOVER};
    }
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
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
    //height: 80px;
`

export const LinkItem = styled(LinkScroll)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid #01bf71;
    }
    &:hover {
        color: ${COLORS.LINKHOVER};
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

export const MenuButtonLink = styled(LinkRouter)`
    border-radius: 8px;
    background: #fff;
    white-space: nowrap;
    padding: 10px 22px;
    color: ${COLORS.BASE1};
    font-size: 16px;
    border: none;
    outline: none;
    cursor: pointer;
    transition: al 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${COLORS.BASE1LIGHT};
        color: #010606;
    }
`
