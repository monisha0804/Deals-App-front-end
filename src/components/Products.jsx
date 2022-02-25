import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'
import axios from 'axios';
import ApiService from '../service/ApiService';
import { useState } from 'react';
import { useEffect } from 'react';

const Container = styled.div`
padding:20px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`

//coupon = current state , setCoupon = function that updates the state

const Products = () => {
    const [coupon, setCoupon] = useState([]);
    
    useEffect(() => {
        
        axios
        .get("http://localhost:1005/coupon/findall")
        .then(({ data }) => {
            setCoupon(data);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <Container>
             { coupon.map(item => (
           <Product item={item} key={item.id}
                  coupon={item.couponId}
                  count={item.count}
                  offer={item.offer}
                  companyName={item.companyName}
                />
          )) }
             
        </Container>
    
        )
}

export default Products
