import React from 'react';

import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartAction';

const Cart = (props) => {
    const {cart, removeFromCart} = props;
     console.log(props);
    return (
        <div>
            <h4>This is Cart {cart.length}</h4>
            <ul>
               {
                   cart.map(product => <li key={product.cartId}>{product.name} <button onClick={()=>removeFromCart(product.cartId)}>X</button></li>)
               }
            </ul>
            
        </div>
    );
};

const mapStateToProps = state =>{
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = {
    removeFromCart: removeFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);