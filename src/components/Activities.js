import React from 'react'
import styled from 'styled-components'

function Activities({icon, head, explain}) {
    return (
        <>
            <Container>
                        {icon}
                <h2>{head}</h2>
                <Info>
                    <p>
                        {explain}
                    </p>
                </Info>
            </Container>
        </>
    )
}

export default Activities

const Container = styled.div`
    max-width: 283px;
    min-height: 235px;
    margin: 20px;

    i{
        margin-bottom: 20px;
        font-size: 3rem;
        color: rgb(62, 84, 163);
    }
    

    h2{
        font-family: Barlow, sans-serif;
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 1.3;
    }

   

`

const Info = styled.div`
margin-top: 20px;



p{
    font-family: Barlow, sans-serif;
    font-size: 16px;
    letter-spacing: 1.2px;
    text-align: center;
    color: #1c2022;
}

`

