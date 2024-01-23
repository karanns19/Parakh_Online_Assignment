import React, { useState } from "react";
import '../Components/style.css'
import jsonData from './data.json';

function Product() {
    const [products, setProducts] = useState(jsonData.data);
    const [cart, setCart] = useState([]);

    const addToCart = (productName) => {
        setCart(prevCart => {
            if (!prevCart.includes(productName)) {
                console.log("Product Added to the cart:", productName);
                console.log([...prevCart, productName]);
                return [...prevCart, productName];
            } else {
                console.log("Product is already in the cart:", productName);
                return prevCart;
            }
        });
    };

    const removeFromCart = (productName) => {
        setCart(prevCart => {
            if (prevCart.includes(productName)) {
                console.log("Product removed from the cart:", productName);
                console.log(prevCart.filter(item => item !== productName));
                return prevCart.filter(item => item !== productName);
            } else {
                console.log("Product is not present in the cart:", productName);
                return prevCart;
            }
        });
    };

    return (
        <div className="Product">
            <h1>Products Page</h1>
            {products.map((category, categoryIndex) => (
                <div key={categoryIndex} className="productsList">
                    <h3>{category.name}</h3>
                    <hr />
                    <div className="productBox">
                        {category.productList.map((product, productIndex) => (
                            <div key={productIndex} className="productCard">
                                <span>Name: {product.name}</span>
                                <span>Price: {product.price}</span>
                                <button onClick={() => addToCart(product.name)}>Add to the Cart</button>
                                <button onClick={() => removeFromCart(product.name)}>Remove from Cart</button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Product;
