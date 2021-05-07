import styled from 'styled-components'

export const SectionContainer = styled.section`
    color: ${({theme}) => theme.main.textPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme, seq}) => (seq % 2 === 0) ? theme.main.bgSecondary : theme.main.bgPrimary};
    width: 100%;
    min-height: 560px;
    max-height: 1100px;
    height: 100%;
    background-image: linear-gradient(to right, ${({theme, seq}) => (seq % 2 === 0) ? theme.main.bgSecondary: theme.main.bgPrimary}, ${({theme, seq}) => (seq % 2 === 0) ? theme.main.bgTertiary : theme.main.bgHeader});
    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export default SectionContainer