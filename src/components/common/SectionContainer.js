import styled from 'styled-components'
// import * as COLORS from '../../constants/colors';

export const SectionContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({lightBg}) => (lightBg ? '#2e4157' : '#010606')}; //'#f9f9f9'
    width: 100%;
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export default SectionContainer