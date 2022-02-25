import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`;
const Image = styled.img`
width:100%;
object-fit:covered;
${mobile({ height: "20vh" })}
`;
const Info = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;
const Title = styled.h1`
color:#8A9A5B;
margin-bottom:20px;
font-size:20px;
font-weight:600;
`
const Button = styled.button`
bordor:none;
padding:10px;
cursor:pointer;
bakcground-color:white;
color:gray;
font-weight:600;
`

const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to = {`products/${item.cat}`}>  
            <Image src ={item.img}/>
                <Info>
                    <Title>{item.title}</Title>
                        <Button>BUY NOW</Button>
                </Info>
            </Link>
        </Container>
    )
}

export default CategoryItem
