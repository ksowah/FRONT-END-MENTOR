import React from 'react'
import styled from 'styled-components'
import Cards from './Cards'

function Grid() {
    return (
        <>
            <Container>
                <Wrapper>
                    <p>Latest Challenges</p>

                </Wrapper>
                <CardsWrap>
                    <Row>
                        <Cards
                            head='E-commerce product page'
                            points = '3'
                            level='intermediate'
                            html='html'
                            css = 'css'
                            js = 'js'
                            detail={`In this challenge, you'll build a beautiful 
                                    product page. We'll be putting your JS skills to 
                                    the test with a lightbox product gallery and cart
                                    functionality!`} 
                            image='/images/grid1.jpg'
                            />
                        <Cards
                            head='Memory game'
                            points = '4'
                            level='advanced'
                            html='html'
                            css = 'css'
                            js = 'js'
                            detail={`This project will be an excellent test for 
                                     your HTML, CSS, and JS skills! You'll be 
                                     building a fun memory game where players try to match pairs.`} 
                            image='/images/grid2.jpg'
                            />
                        <Cards
                            head='Time tracking dashboard'
                            points = '2'
                            level='juniour'
                            html='html'
                            css = 'css'
                            js = 'js'
                            detail={`A perfect opportunity to practice your CSS Grid skills. 
                                    For anyone wanting to take it up a notch, we provide a 
                                    JSON data file to practice working with data.`} 
                            image='/images/grid3.jpg'
                            />
                        </Row>
                    <Row>
                            <Cards
                                head='GitHub user search app'
                                points = '2'
                                level='juniour'
                                html='html'
                                css = 'css'
                                js = 'js'
                                api = 'api'
                                detail={`In this project, you'll use the GitHub users API 
                                        to pull profile data and display it. It's a great challenge 
                                        if you're looking to practice working with a 3rd-party API.`} 
                                image='/images/grid4.jpg'
                                />
                            <Cards
                                head='Order summary component'
                                points = '1'
                                level='newbie'
                                html='html'
                                css = 'css'
                                detail={`A perfect project for newbies who are starting to build confidence with layouts!`} 
                                image='/images/grid5.jpg'
                                />
                            <Cards
                                head='Galleria slideshow site'
                                points = '3'
                                level='intermediate'
                                html='html'
                                css = 'css'
                                js = 'js'
                                detail={`This art gallery slideshow project will be a great test for your layout 
                                and JS skills. With the masonry layout, slideshow logic, and lightbox 
                                view there's a lot to build!`} 
                                image='/images/grid6.jpg'
                                />
                        </Row>
                    </CardsWrap>

            </Container>
        </>
    )
}

export default Grid

const Container = styled.div`
    width: 100vw;
    min-height: 800px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 0;
    justify-content: center;
    align-text: center;
    padding: 30px; 
    z-index: 0;   

`

const Wrapper = styled.div`
height: 40vh;
width: 95vw;
background-color: blue;
border-top-left-radius: 12px;
border-top-right-radius: 12px;
background: linear-gradient(rgb(62, 84, 163) 0%, rgb(62, 84, 163) 30rem);
display: flex;
text-align: center;
justify-content: center;

p{
    color: #fff;
    font-weight: 800;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin: 60px 0;
}

`

const CardsWrap = styled.div`
    width: 100vw;
    padding: 5rem;
    padding-left: 3rem;
    margin-top: -12rem;
    margin-left: -1rem;

`

const Row = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 45px;

    @media (max-width: 955px){
        flex-direction: column;
    }

`
