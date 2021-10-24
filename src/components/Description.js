import React from 'react'
import styled from 'styled-components'
import Activities from './Activities'

function Description() {
    return (
        <>
            <Container>
                <h4>How it Works</h4>

            <Wrap>    

                        <Activities 
                                icon={<i class="fas fa-arrow-down"></i>}
                                head={'Choose your challenge'}
                                explain={`Have a look through our 
                                            collection of web designs. 
                                            Pick one that you feel will be 
                                            a nice challenge for you at this stage.`}
                                
                        />
                        <Activities 
                                icon={<i class="fas fa-laptop-code"></i>}
                                head={'Code the design'}
                                explain={`Start the challenge and 
                                            download all the starter files.
                                            We provide all the files you'll 
                                            need to complete the challenge. 
                                            Building it is up to you!`}
                                
                        />
                        <Activities 
                                icon={<i class="fas fa-code-branch"></i>}
                                head={'Submit your solution'}
                                explain={`Post your solution on the platform 
                                        for everyone to see and get feedback 
                                        on your code from other developers in the community.`}
                                
                        />
                        <Activities 
                                icon={<i class="far fa-comments"></i>}
                                head={'Give others feedback'}
                                explain={`Thinking critically about other people's 
                                        code is a crucial skill. Help others 
                                        while deepening your own knowledge by 
                                        giving feedback on solutions.`}
                                
                        />
                </Wrap>
               
            </Container>
        </>
    )
}

export default Description


const Container = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100vw;
    background-color: rgb(250, 250, 250);


    h4{
        font-weight: bolder;
        text-transform: uppercase;
        margin-bottom: 75px;
    }


`
const Wrap = styled.div`
display: flex;
margin: 0 15px;

@media (max-width: 950px){
    flex-direction: column;
}

`

