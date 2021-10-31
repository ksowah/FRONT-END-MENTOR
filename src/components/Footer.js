import React from 'react'
import styled from 'styled-components'

function Footer() {
    return (
        <Container>
            <Columns>
                <One>
                    <h1>frontend mentor</h1>
                    <p>
                        Gain real experience of building websites 
                        and providing code reviews. Build 
                        your portfolio and help others achieve their goals.
                    </p>
                </One>
                <Two>
                    <WrapOne>
                        <h1>explore</h1>
                        <li>Unlock PRO</li>
                        <li>Challenges</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                    </WrapOne>
                    <WrapTwo>
                    <h1>community</h1>
                    <li>Contact Us</li>
                    <li>Slack</li>
                    <li>FAQs</li>
                    <li>Blog</li>
                    </WrapTwo>
                </Two>
                <Three>

                </Three>
            </Columns>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    width: 100%;
    min-height: 394px;
`

const Columns = styled.div`
    display: flex;
    border-top: 1px solid #000; 
    border-bottom: 1px solid #000;
    height: 80%; 

    @media(max-width: 900px){
        flex-direction: column;
    }
`

const One = styled.div`
margin: 4rem;
min-width: 25%;

    h1{
        font-size: 0.75rem;
    font-weight: 800;
        margin-bottom: 1.6rem;
        text-transform: uppercase;
    }

    p{
        font-size: 0.9rem;
        font-weight: normal;
        color: #1c2022;
        letter-spacing: 1.1px;
        line-height: 1.5rem;
    }

`
const Two = styled.div`
display: flex;
margin: 4rem;
margin-left: 2rem;
min-width: 35%;

h1{
    font-size: 0.75rem;
    font-weight: 800;
    margin-bottom: 1.6rem;
    text-transform: uppercase;
}

@media(max-width: 900px){
    flex-direction: column;
}


`

const WrapOne = styled.div`
margin-bottom: 2rem;

li{
    font-size: 0.9rem;
    font-weight: normal;
    color: #1c2022;
    list-style: none;
    margin: 1rem;
    margin-left: 0;
    margin-right: 3rem;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: red;

    }
}

`

const WrapTwo = styled.div`
li{
    font-size: 0.9rem;
    font-weight: normal;
    color: #1c2022;
    list-style: none;
    margin: 1rem;
    margin-left: 0;
    margin-right: 3rem;
    position: relative;

    &:after{
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: -5px;
        height: 2px;
        background-color: red;
        opacity: 1;
        transform-origin: bottom center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(1);

    }
}

`

const Three = styled.div`


`
