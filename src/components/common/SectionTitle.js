import styled from 'styled-components'

export const SectionTitle = styled.h3`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 64px;
    height: 224px;
    color: ${({theme}) => theme.main.colorPrimary};
    @media screen and (max-width: 480px) {
        margin-top: 0;
        height: 100px;
    }
`

export default SectionTitle