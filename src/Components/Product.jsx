import React, { useState, createContext, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import axios from 'axios';


const AppContext = createContext();

const AppProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const handleCart = (product) => {

    setCart([...cart, product]);

    alert('Added to cart successfully')

  };

  return (
    <AppContext.Provider value={{ cart, setCart, handleCart }}>
      {children}
    </AppContext.Provider>
  )
}


const Product = () => {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {

      const res = await axios.get('https://fakestoreapi.com/products')
      const obaid = res.data;
      console.log(obaid)
      setProducts(obaid)

    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {

    fetchProducts()

  }, [])

  const data = useContext(AppContext)
  const { cart, handleCart } = data;

  return (

    <div className="container">
      <h1 className="product_heading">Products</h1>
      <div className="cart_btn">
        <Link to='/cart'>
          <button className='btn'>Cart</button>
        </Link>
        <h4>Total Item:{cart.length}</h4>
      </div>
      <div className="wrapper">
        {
          products.map((item) => (
            <ProductCard key={item.id} product={item} addToCart={handleCart} />
          ))
        }
      </div>

    </div>

  )
}

export default Product;
export { AppContext, AppProvider }

