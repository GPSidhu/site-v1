import styled from 'styled-components'
// import * as COLORS from '../../constants/colors';

export const SectionContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({lightBg}) => (lightBg ? '#2e4157' : '#010606')}; //'#f9f9f9'
    width: 100%;
    position: relative;

    height: 100vh;
    //background-image: url('/images/contentBg.jpeg');
    z-index: 3;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
    // :before {
    //     content: '';
    //     position: absolute;
    //     top: ${({top}) => -top*0.25 + 'px'}; //0;
    //     left: 0;
    //     right: 0;
    //     bottom: 0;
    //     background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    //     linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    //     z-index: 2;
    // }
`
export default SectionContainer