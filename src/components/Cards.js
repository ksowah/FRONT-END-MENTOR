import React from 'react'
import styled from 'styled-components'

function Cards({head, points, level, detail, image, html,css,js, api}) {
    return (
        <>
            <Container>
                <CardImg src={image}/>
                <Content>
                    <h2>{head}</h2>
                    <Display>
                        <Courses>
                            <Html>
                                <p>{html}</p>
                            </Html>
                            <Css>
                                <p>{css}</p>
                            </Css>
                            <Js>
                                <p>{js}</p>
                            </Js>
                            <Api>
                                <p>{api}</p>
                            </Api>
                        </Courses>

                        <Level>
                            <Points><p>{points}</p></Points>
                            
                        <h4>{level}</h4>
                        </Level>
                    </Display>

                    <Details>
                        <p>     
                            {detail}
                        </p>
                    </Details>

                </Content>

            </Container>
        </>
    )
}

export default Cards

const Container = styled.div`
    height: 32rem;
    width: 23.5rem;
    overflow: hidden;
    margin-top: 20px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    border: 1px solid rgb(219, 229, 230);
    display: flex;
    flex-direction: column;

`

const CardImg = styled.img`
    height: 50%;
    width: 100%;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    transition: 250ms;
    cursor: pointer;

    &:hover{
        transform: scale(1.08);
    }

`

const Content = styled.div`
padding: 20px;

h2{
    font-weight: normal;
    margin-bottom: 15px;
}

`

const Display = styled.div`
display: flex;
justify-content: space-between;

`

const Courses = styled.div`
display: flex;

p{
    padding: 5px;
}

`
const Level = styled.div`
width: 45%;
border: 1px solid rgb(219, 229, 230);
border-radius: 6px;
overflow: hidden;
display: flex;


        p{
            font-weight: 700;
            color: #fff;
        }

        h4{
            text-transform: uppercase;
            color: #f1B604;
            font-size: 13px;
            padding: 5px;
        }

`

const Points = styled.div`
display: flex;
justify-content: center;
padding: 2px;
padding-top: 4px;
background: #f1B604;
width: 20%;
height: 100%


`

const Details = styled.div`
margin-top: 15px;
line-height: 1.5rem;

p{
    color: #737373;
    font-size: 15px;
    line-spacing: 1.2px;
}


`

const Html = styled.div`
    p{
        font-weight: 700;
        color: #6ABECD;
        text-transform: uppercase;
    }

`
const Css = styled.div`
p{
    font-weight: 700;
    color: rgb(62, 84, 163);
    text-transform: uppercase;
}

`
const Js = styled.div`
p{
    font-weight: 700;
    color: rgb(225, 55, 132);
    text-transform: uppercase;
}

`
const Api = styled.div`
p{
    font-weight: 700;
    color: #85c20a;
    text-transform: uppercase;
}

`
