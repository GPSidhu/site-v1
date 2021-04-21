import styled from 'styled-components'
import * as COLORS from '../../../constants/colors'
import * as FONTS from '../../../constants/fonts'
import {
    MdArrowForward,
    MdKeyboardArrowRight
} from 'react-icons/md'

export const CoverContainer = styled.div`
    background: ${props => props.coverBg || COLORS.COVER_BG};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh; //800px;
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
    //background: #2e4157; 

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
    //position: fixed;
    background-image: url('/images/contentBg.jpeg');
    // -o-object-fit: cover;
    // object-fit: cover;
    //background: #232a34;
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

export const ContentH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px
    }
    @media screen and (max-width: 480px) {
        font-size: 32px
    }
`

export const ContentP = styled.p`
    // margin-top: 24px;
    color: #fff;
    font-size: ${props => FONTS.TEXT[props.size] || FONTS.TEXT.sm};
    //text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px
    }
    @media screen and (max-width: 480px) {
        font-size: 18px
    }
`

export const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`
