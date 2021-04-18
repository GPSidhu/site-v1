import styled from 'styled-components'

export const SectionContainer = styled.div`
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #2e4157;
    //${({lightBg}) => (lightBg ? '#f9f9f9' : '#010606')};
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export default SectionContainer