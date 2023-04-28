import {PRODUCTS} from '../../Products';
import {Product} from './Product';
import './shop.css';
import React from 'react';
export const Shop = () => {
  return (
    <div className='shop'>
        <div className='shoptitle'>
            <h1>GO BUY</h1>
            </div>
        <div className='products'>
            {PRODUCTS.map((product)=>(
            <Product data={product}/>))}
        </div>
        
    </div>
  )
}
