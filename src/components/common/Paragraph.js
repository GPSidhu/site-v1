import styled from 'styled-components'

export const Paragraph = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px
    }
    @media screen and (max-width: 480px) {
        font-size: 18px
    }
`