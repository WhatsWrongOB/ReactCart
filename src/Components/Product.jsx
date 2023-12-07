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
  const [searchInput, setSearchInput] = useState('');

  const fetchProducts = async () => {

    try {
      const res = await axios.get('https://fakestoreapi.com/products');
      const product = res.data;
      setProducts(product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const data = useContext(AppContext);
  const { cart, handleCart } = data;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="product_heading">Products</h1>
      <div className="cart_btn">
        <input
          type="search"
          className='search'
          placeholder="search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <Link to="/cart">
          <button className="btn">Cart</button>
        </Link>
        <h4>Total Item:{cart.length}</h4>
      </div>
      <div className="wrapper">
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} product={item} addToCart={handleCart} />
        ))}
      </div>
    </div>
  );
};

// ...


export default Product;
export { AppContext, AppProvider }

