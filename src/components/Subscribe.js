import React from 'react'
import styled from 'styled-components'

function Subscribe() {
    return (
        <Container>
            <Info>
                <Head>
                    <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                </Head>
                <Content>
                    <p>
                        Stay up-to-date with new challenges, 
                        featured solutions, selected articles 
                        and Frontend Mentor latest news
                    </p>
                </Content>
                <CheckBox>
                    
                <input type="checkbox" />
                    <label>
                        I am happy for Frontend Mentor to contact me by email
                    </label>
                </CheckBox>
                <Input>
                    <input type='email' placeholder='example@domain.com'/>
                <Button>SUBSCRIBE</Button>
            </Input>

            </Info>
            <Image src='/images/illustration-desk.svg'/>
        </Container>
    )
}

export default Subscribe

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 588px;;
    background-image: url('/images/bg-layer-1.svg');
    background-position: center center;
    background-repeat: no-repeat;
    margin-top: 60px;
    margin-bottom: 0px;

`

const Info = styled.div`
margin: 60px;
margin-left: 120px;
width: 55%;
height: 80%;

`

const Image = styled.img`
margin: 60px;
width: 30%;
height: 60%;


`

const Head = styled.div`

    p{
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 1.2px;
    }

`

const Content = styled.div`
margin-top: 3rem;

    p{
        font-size: 1.7rem;
        font-weight: 500;
        letter-spacing: 1.2px;
    }

`

const CheckBox = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    margin-top: 40px;


    input{
        -moz-appearance:none;
        -webkit-appearance:none;
        -o-appearance:none;
        width: 23px;
        height: 23px;
        outline: 3px solid #3e54a3;
        border-radius: 2px;
        cursor: pointer;

    }


    label{
        margin: 10px;
        font-size: 1rem;
        font-weight: 400;
        
    }

`

const Input = styled.div`

display: flex;
margin-top: 40px;

    input{
        width: 441px;
        height: 44px;
        border: 1px solid #000;
        background: transparent;
        outline: none;
        color: #grey;
        padding: 7px;
        font-size: 17px;

        ::placeholder{
            color: gray;
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
        color: #fff;
        font-style: italic;
        font-weight: 800;
        border: none;
        width: 10.5rem;
        padding: 8px;
        background: #ed2c49;
        border-radius: 20px;
        margin-left: 1.1rem;
        cursor: pointer;
        transition: transform 0.3s ease 0s;

        &:hover{
            transform: scale(1.05);
            box-shadow:6px 8px 6px rgb(219, 229, 230);
        }

        @media (max-width: 777px){
                padding: 10px;
                margin-top: 30px;
        }
    

`
