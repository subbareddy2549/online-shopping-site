import React, { useContext } from 'react';
import {Shopcontext} from '../../context/Shopcontext';
import { PRODUCTS } from '../../Products';

export const Product = (props) => {
    const {id,productName,price,productImage}=props.data;
    const {addToCart,cartItems}=useContext(Shopcontext);
    const cartItemAmount= cartItems[id]
  return (
    <div className='product'>
       < img src={productImage}/>

       <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
       </div>
       <button className='bttn' onClick={()=> addToCart(id)}>Add to Cart {cartItemAmount >0 && <> ({cartItemAmount})</>}</button>
    </div>
    
  )
}
