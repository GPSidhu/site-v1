import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: ${({theme}) => theme.main.bgTertiary};
    color: ${({theme}) => theme.main.textPrimary};
    border-radius: 6px;
    border: 1px dotted ${({theme}) => theme.main.borderPrimary};
    padding: 1rem;
    max-height: 380px;
    z-index: 2;
    @media screen and (max-width: 375px) {
        display: inline-table;
    }
`
const CardHeader = styled.div`
    margin-bottom: 8px;
    flex: 0;
    color: ${({theme}) => theme.main.textPrimary};
`

const CardFooter = styled.div`
    margin-top: 8px;
    flex: 0;
`

const CardBody = styled.div`
    flex: 1;
    font-size: 12px;
`

const Card = ({header, footer, children, style}) => {
    return (
        <CardWrapper style={style}>
            <CardHeader>{header}</CardHeader>
            <CardBody>{children}</CardBody>
            <CardFooter>{footer}</CardFooter>
        </CardWrapper>
    )
}

export default Card
