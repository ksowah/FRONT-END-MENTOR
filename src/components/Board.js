import React from 'react'
import styled from 'styled-components'

function Board() {
    return (
        <Container>
         <TitleWrap>   
            <Title>
                <span><a>View all Challenges</a></span>
            </Title>
         </TitleWrap>   
         <Body>
            <Logo src='/images/slack-logo.svg'/>
            <Head>
                <p>join our slack community</p>
            </Head>
            <Info>
                <p>
                    Join over 80,000 people taking the challenges, 
                    talking about their code, helping each other, 
                    and chatting about all things front-end!
                </p>
            </Info>
            <Input>
                <input type='email' placeholder='example@domain.com'/>
                <Button>REQUEST INVITE</Button>
            </Input>
         </Body>
        </Container>
    )
}

export default Board

const Container = styled.div`
width: 100vw;
height: 43rem;
margin-top: 0;
margin-bottom: 40px;
padding-bottom: 30px;
overflow: hidden;

@media (max-width: 750px){
    height: 50rem;
}

`

const Title = styled.div`
display: flex;
text-align: center;
justify-content: center;

    span{
        color: #1c2022;
        font-size: 16px;
        position: relative;
        cursor: pointer; 

        &:after{
            content: '';
                height: 2px;
                background-color: rgb(62, 84, 163);
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 1;
                transform-origin: bottom center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(1);

        }

        
    }

    &:hover{
        span:after{
            transform: scaleX(0);
        }
    }

`

const TitleWrap = styled.div`
    width: 100vw;
    height: 20%;
    margin: 0;

`

const Body = styled.div`
width: 100vw;
height: 80%;
background: #3e54a3;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 50px;
margin-left: 40px;
border-radius: 13px;
overflow: hidden;
position: relative;

    &:after{
        content: '';
        background-image: url(/images/bg-slack.svg);
        background-repeat: no-repeat;
        background-position: center center;
        height: 60rem;
        opacity: 0.1;
        position: absolute;
        right: -20rem;
        transform: rotate(-40deg);
        width: 60rem;
    }

}


`

const Logo = styled.img`
width: 200px;
height: 82px;
margin: 50px 0;

`

const Head = styled.div`
margin-bottom: 50px;
    p{
        text-transform: uppercase;
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        letter-spacing: 1.1px;
    }

`

const Info = styled.div`
    width: 70%;
    margin-bottom: 50px;

    p{
        font-size: 25px;
        font-weight: 500;
        color: #fff;
        text-align: center;
    }

`

const Input = styled.div`

display: flex;

    input{
        width: 441px;
        height: 44px;
        border: 1px solid #fff;
        background: transparent;
        outline: none;
        color: #fff;
        padding: 7px;
        font-size: 17px;

        ::placeholder{
            color: rgb(219, 229, 230);
            opacity: 1;
        }

    }

    


    @media (max-width: 777px){
        flex-direction: column;    
        justify-content: center;
        align-items: center;

        button{
            width: 11.7rem;
            padding: 10px;
            margin-top: 30px;
        }
    }

`

const Button = styled.button`
        color: #3e54a3;
        font-style: italic;
        font-weight: 900;
        border: none;
        width: 11.7rem;
        padding: 10px;
        background: #fff;
        border-radius: 20px;
        margin-left: 1.1rem;
        cursor: pointer;

        @media (max-width: 777px){
                width: 11.7rem;
                padding: 10px;
                margin-top: 30px;
        }
    

`
