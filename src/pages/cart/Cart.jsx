import React, { useContext } from 'react'
import { PRODUCTS } from '../../Products';
import './cart.css'

import { Shopcontext } from '../../context/Shopcontext';
import { Cartitem } from './Cartitem';
import { useNavigate } from 'react-router-dom';

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(Shopcontext);
  const navigate = useNavigate();
  const totalAmount = getTotalCartAmount();

  return (
    <div className='cart'>
      <div><h1>Your Cart Items</h1></div>
      <div className='cartitems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <Cartitem data={product} />
          }
        })}

      </div>

      {totalAmount > 0 ? (
        <div className='checkout'>

          <p>Subtotal : ${totalAmount}</p>
          <button onClick={() => navigate("/")}>ContinueShopping</button>
          <button>Checkout</button>
        </div>
      ) : (<h1>Your Cart is Empty</h1>)
      }

    </div>
  )
}
