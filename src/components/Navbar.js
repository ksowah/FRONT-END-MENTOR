import React, { useState, useEffect } from 'react'
import styled from 'styled-components'



 
function Navbar({ button, clickEvent }) {

    const [mobileView, setMobileView] = useState(false)
    const [click, setClick] = useState(false)

    const checkClick = ()=> setClick(!click)


    const checkMobileView = ()=>{

        if(window.innerWidth <= 1130){
            setMobileView(true)
        }else{
            setMobileView(false)
        }
    }

    useEffect(()=>{
        checkMobileView()
    }, [])

    window.addEventListener('resize', checkMobileView)


    return (
        <>
            <Nav>
                <Logo src='/images/nav-logo.svg'/>
                <Wrap>
                    {mobileView ?
                        <i class="fas fa-bars" onClick={checkClick}></i>
                            :

                            <>
                            <a>
                                <span>unlock <p>pro</p></span>
                            </a>
                            <a>
                                <span>challenges</span>
                            </a>
                            <a>
                                <span>solution</span>
                            </a>
                            <a>
                                <span>resources</span>
                            </a>
                            
                        <Button onClick={clickEvent}>
                            {button} <i class="fab fa-github"></i>
                        </Button>
                        </> 
                    
                    }
                </Wrap>
            </Nav>
            {
                click &&
            <NavMenu>
            <li><a> Login with Github <i class="fab fa-github"></i></a></li>
            <li><a> <span>unlock <p>pro</p></span></a></li>
            <li><a>Challenges</a></li>
            <li><a>Solutions</a></li>
            <li><a>Resources</a></li>
        </NavMenu>
            }

        </>
    )
}


export default Navbar




const Nav = styled.div`
width: 100vw;
height: 65px;
border-bottom: 1px solid rgb(219, 229, 230);
display: flex;
padding: 20px;
justify-content: space-between;
overflow: hidden;

`

const Logo = styled.img`
    margin-left: 25px;
    height: 29px;
    cursor: pointer;
`

const Wrap = styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;

a{

        span{
            margin: 5px 15px;
            text-transform: uppercase;
            font-weight: bold;
            font-style: italic;
            font-size: 15px;
            cursor: pointer;
            position: relative;
            display: flex;
        
            
            &:after{
                content: '';
                height: 2px;
                background-color: red;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -5px;
                opacity: 0;
                transform-origin: bottom center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
            
            
            }
          
          &:hover{
            span:after{
                opacity: 1;
                transform: scale(1);
        }
    }
    
}

p{
    background-color: rgb(62, 84, 163);
    padding: 3px 10px;
    border-radius: 4px;
    color: #fff;
    font-size: 10px;
    margin-left: 4px;
    font-weight: bolder;
    font-style: normal;
}

   
`

const Button = styled.button`
    background-color: rgb(36, 41, 46);
    outline: none;
    border: 1px solid rgb(36, 41, 46);
    border-radius: 10rem;
    color: rgb(255, 255, 255);
    padding: 8px 20px;
    align-text: center;
    font-size: 13px;
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

`

const NavMenu = styled.div`
    width: 100vw;
    position: fixed;
    z-index: 50;
    background: rgb(250, 250, 250);


    li{
        list-style: none;
        padding: 20px 25px;
        border-bottom: 1px solid rgb(219, 229, 230);
        text-transform: uppercase;
        font-weight: bold;
        font-style: italic;
        font-size: 15px;
        cursor: pointer;

         
        i{
            font-size: 2rem;
            cursor: pointer;
        }
           
        span{
            display: flex;
            
            p{
                background-color: rgb(62, 84, 163);
                padding: 3px 10px;
                border-radius: 4px;
                color: #fff;
                font-size: 10px;
                margin-left: 4px;
                font-weight: bolder;
                font-style: normal;
            }
        }
    }

`


