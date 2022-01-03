import React from 'react';

const Product = (props) => {
    const { product, addToCart} = props;
    return (
        <div style={{border: '1px solid gray', margin: '5px', padding: '5px'}}>
            <h1>{product.name}</h1>
            <button onClick={()=> addToCart(product.id,product.name)}>Add to Cart</button>
        </div>
    );
};

export default Product;