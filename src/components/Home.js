import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>

            <Content>
                <Heading>
                    <h1><span>Improve <img src='/images/zig-zag-underline.svg'/></span> your front-end coding skills by building real projects</h1>
                </Heading>
                <Information>
                    <p>
                    Solve real-world HTML, CSS and JavaScript challenges whilst working to professional
                     designs. Join 235,568 developers building projects, reviewing code, 
                     and helping each other get better.
                    </p>
                </Information>

                <Button>
                        Login with Github <i class="fab fa-github"></i>
                </Button>

            </Content>

            <Image src='/images/front-image.webp'/>
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    width: 100vw;
    height: 550px;
    align-items: center
    justify-content: center;
    background-image: url('/images/bg-layer-1.svg');
    background-position: 102% center;
    margin: 5rem;
    margin-bottom: 2rem;
    display: flex;
    position: relative;

    @media (max-width: 700px){
        margin: 2rem;
    }

`

const Content = styled.div`
width: 600px;
margin-right: 8rem;
height: 425px;
left: 0;
padding: 10px 0;

`

const Heading = styled.h1`
    color: rgb(62, 84, 163);
    font-family: Barlow, sans-serif;
    font-weight: light;
    font-size: 1.5rem;
    line-height: 3.5rem;


    span{
        position: relative;

        img{
            position: absolute;
            left: -10px;
            bottom: -5px;
            width: 12.5rem;
            height: 0.6rem;
        }
    }

    @media (max-width: 700px){
        font-size: 1rem;
        line-height: 2.5rem;

        span{
            img{
                width: 9rem;
            }
        }
       
    }

    @media (max-width: 400px){
        font-size: 0.7rem;
        line-height: 1.9rem;
        letter-spacing: 3px;

        span{
            img{
                width: 7.5rem;
            }
        }
    }

    

`

const Information = styled.div`
    padding: 2rem 0;
    font-size: 1.4rem;
    font-family: Barlow, sans-serif;
    line-height: 2rem;

    @media (max-width: 700px){
        font-size: 0.9rem;
        line-height: 1.7rem;
    }

`

const Button = styled.button`
background-color: rgb(237, 44, 73);
border: 1px solid rgb(237, 44, 73);
outline: none;
border-radius: 10rem;
color: rgb(255, 255, 255);
padding: 13px 35px;
align-text: center;
font-size: 1.2rem;
cursor: pointer;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
margin: 0 30px;
transition: transform 0.3s ease 0s;
 
    i{
        font-size: 1.1rem;
        padding-left: 6px;
    }

&:hover{
    transform: scale(1.1);
    box-shadow:6px 8px 6px rgb(219, 229, 230);
}

@media (max-width: 700px){
    padding: 10px 25px;
    font-size: 0.9rem;
    margin: 0 20px;
}

@media (max-width: 370px){
    padding: 7px 19px;
    font-size: 0.6rem;
    margin: 0 15px;
}


`

const Image = styled.img`
width: 490px;
height: 425px;
margin-right: 0;

@media (max-width: 1065px){
        display: none;
}

`


