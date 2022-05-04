import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'
const Shop = () => {

    const [products,setProducts]=useState([]);
    const [cart,setCart]=useState([]);
    const [displayProducts,setDisplayProducts]=useState([])
    useEffect(()=>{
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data)
            setDisplayProducts(data)
            console.log(data);
        })
    },[])

    const handleAddToCart=(product)=>{
       
        const newProduct=[...cart,product];
        console.log(newProduct);
        setCart(newProduct)
        //add to Local storage
        addToDb(product.key)
    }

    useEffect(()=>{
        if(products.length){
            const savedCart=getStoredCart();
            const storedCart=[];
            
            for(const key in savedCart){
                

                const addProducts=products.find(product=>
                    product.key===key);
               if(addProducts){
                const quantity=savedCart[key];
                addProducts.quantity=quantity;
                storedCart.push(addProducts);
               }
               
                
            }
            setCart(storedCart);
        }
        
    },[products])
    const handleSearch=event=>{
        const searchText=event.target.value;
        const matchedProducts=products.filter(product=>product.name.toLowerCase().includes(searchText.toLowerCase()));
        console.log(matchedProducts.length);
        setDisplayProducts(matchedProducts)
        
    }
    return (
        <>
        <div className="serach-container">
            <input type="text"
                placeholder='Enter For Searching'
                onChange={handleSearch}
            />
        </div>
        <div className='shop-container'>
            
            <div className="product-container">
                {
                    displayProducts.map(product=><Product
                        key={product.key}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
              <Cart cart={cart}></Cart>
            </div>
        </div>
        
        </>
    );
};

export default Shop;