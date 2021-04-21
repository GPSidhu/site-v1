import React from 'react'
import styled from 'styled-components'

const bgColor = 'red'
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    background: darkgray; //linear-gradient(45deg, #fff, transparent);
    //border: 1px solid black;
    color: black;
    //border-radius: 6px;
    //box-shadow: 12px 12px grey;
    padding: 1rem;
    max-height: 380px;
    z-index: 2;

    // :after {
    //     border-left: 9px solid red;
    //     border-right: 9px solid red;
    //     border-top: 9px solid ${bgColor};
    //     bottom: 0;
    //     left: 50%;
    //     transform: translateY(-50%);
    // }
`
const CardHeader = styled.div`
    //border: 1px dotted black;
    margin-bottom: 8px;
    flex: 0;
`

const CardFooter = styled.div`
    //border: 1px dotted black;
    margin-top: 8px;
    flex: 0;
`

const CardBody = styled.div`
    //border: 1px dotted black;
    flex: 1;
    font-size: 12px;
`

const Card = ({header, footer, body}) => {
    return (
        <CardContainer>
            <CardHeader>{header}</CardHeader>
            <CardBody>{body}</CardBody>
            <CardFooter>{footer}</CardFooter>
        </CardContainer>
    )
}

export default Card