import React, { useContext } from 'react';
import { Shopcontext } from '../../context/Shopcontext';


export const Cartitem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItem, getTotalCartAmount } = useContext(Shopcontext);


    return (
        <div className='cartitem'>
            <img src={productImage} />
            <div className='description'>
                <p><b>{productName}</b></p>
                <p>${price}</p>
                <div className='counthandler'>
                    <button onClick={() => removeFromCart(id)}>-</button>
                    <input value={cartItems[id]} onChange={(e) => updateCartItem(Number(e.target.value), id)} />
                    <button onClick={() => addToCart(id)}>+</button>

                </div>

            </div>




        </div>
    )
}
