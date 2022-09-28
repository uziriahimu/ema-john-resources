import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    useEffect(() => {
        const storedCart = getStoredCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addProduct = products.find(product => product.id === id);
            if (addProduct) {
                const quantity = storedCart[id];
                addProduct.quantity = quantity;
                saveCart.push(addProduct);
            }
        }
        setCart(saveCart);
    }, [products]);

    const handleAddToCart = (product) => {
        // console.log(product);
        let newCart = [];
        const exist = cart.map(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else {
            const rest = cart.filter(pd => pd.id !== product.id)
            exist.quantity = exist.quantity + 1;
            newCart = [...rest, exist]
        }
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Products
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Products>)
                }
            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;