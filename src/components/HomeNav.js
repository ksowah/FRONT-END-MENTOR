import React from 'react'
import styled from 'styled-components'

function HomeNav() {

    return (
        <Container>
            <Page>
               <p> home </p>
            </Page>
        </Container>
    )
}

export default HomeNav

const Container = styled.div`
width: 100vw;
height: 55px;
border-bottom: 1px solid rgb(219, 229, 230);
display: flex;
align-items: center;
margin-bottom: 30px;


`

const Page = styled.div`
    margin: 2.5rem;
    display: flex;
    align-items: center;
    height: 100%;
    border-left: 1px solid rgb(219, 229, 230);
    border-right: 1px solid rgb(219, 229, 230);

    p{
        text-transform: uppercase;
        font-weight: 700;
        letter-spacing: 1.2px;
        padding: 1rem;

    }


`
