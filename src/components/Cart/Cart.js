import React, { useReducer } from 'react';

const Cart = (props) => {
    const {cart}=props;
  
  /*  const totalReducer=(previous,product)=>previous+product.price;
    const total=cart.reduce(totalReducer,0)*/
   let total=0;
   let totalQuantity=0;
    for(const product of cart){
        product.quantity=!product.quantity?1:product.quantity;
        total+=product.price*product.quantity;
        
        totalQuantity+=product.quantity;
    }

    const shiping=15;
    const tax=(total+shiping)*.10;
    const grandTotal=total+shiping+tax;
    return (
        <div>
            <h2>Order Summary</h2>
              <h4>Total Item Ordered : {totalQuantity}</h4>
              <h4>Total : {total.toFixed(2)}</h4>
              <h4>Shipping: {shiping}</h4>
              <h4>Tax : {tax.toFixed(2)}</h4>
              <h4>Total : {grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;