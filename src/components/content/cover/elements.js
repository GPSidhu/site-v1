import styled from 'styled-components'
import * as FONTS from '../../../constants/fonts'
import {
    MdArrowDownward
} from 'react-icons/md'

export const CoverContainer = styled.div`
    background: ${({theme, seq}) => (seq % 2 === 0) ? theme.main.bgSecondary : theme.main.bgPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
      
    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
        linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
    `

export const CoverBg = styled.div`
    position: absolute;
    top: 0; 
    // {({top}) => -top*0.25 + 'px'};
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow: hidden;
    display: flex;
    justify-content: center;
`

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    background-image: url('/images/coverBg.jpeg');
    background-repeat:no-repeat;
    background-size:cover;
    pointer-events: none;
`

export const Content = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
`

export const Quote = styled.p`
    font-family: 'Pinyon Script', cursive;
    color: ${({theme}) => theme.main.textPrimary};
    font-size: ${props => FONTS.TEXT[props.size] || FONTS.TEXT.sm};
    max-width: 500px;

    @media screen and (max-width: 768px) {
        font-size: 32px
    }
    @media screen and (max-width: 480px) {
        font-size: 24px
    }
`
export const Author = styled.div`
    color: ${({theme}) => theme.main.textPrimary};
    font-size: ${props => FONTS.TEXT[props.size] || FONTS.TEXT.sm};
    width: 100%;
    font-style: italic;
    span {
        float: right;
    }
    @media screen and (max-width: 768px) {
        font-size: 24px
    }
    @media screen and (max-width: 480px) {
        font-size: 16px
    }
`

export const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowDownward = styled(MdArrowDownward)`
    margin-left: 8px;
    font-size: 20px;
`
