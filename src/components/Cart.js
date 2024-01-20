import React from 'react';
import { useSelector } from 'react-redux';
import { removeProductCart, setQuantity } from '../redux/actions/cart-actions';
import { useDispatch } from 'react-redux';
import CartItem from './CartItem';
import StripeCheckout from 'react-stripe-checkout';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const { totalCost, items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  //console.log(cart);

  const onToken=(token)=>{
    console.log(token);
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        Grand Total : ${totalCost}
      </div>
      <div style={{display:'flex', alignItems:'center' , justifyContent:'center' , margin:'10px'}}>
        <StripeCheckout  name='Chekout Page' currency='USD' amount={totalCost*100} token={onToken} stripeKey='pk_test_51OVtXWSFzS856OF2qWRTS4OaVpg3TQmBLBcP1E1A7F4Sx0Skx6YvYHirtcEz7GlIxPYl907ga8pyEGgVe8p6dF7S00ZRZPODh8'/>
      </div>
      <hr/>
      {cart.length !== 0 ? cart.map((item) => (
        <CartItem onQuantityChange={qty => qty === 0 ? dispatch(removeProductCart(item.id)) : dispatch(setQuantity(item.id, qty))} quantity={item.qty} key={item.id} {...item} onItemRemove={() => dispatch(removeProductCart(item.id))} />
      )) : <h2 style={{ display: 'flex', justifyContent: 'center' }}>No Products in the Cart</h2>}
    </>
  )
}

export default Cart