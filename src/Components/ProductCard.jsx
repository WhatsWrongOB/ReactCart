import React from 'react'

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <img src={product.image} alt="img" />
      <h2 className="heading">{product.title}</h2>
      <h4>ratings {product.rating.rate}</h4>
      <h2 className="heading_two">${product.price}</h2>
      <button className='btn' onClick={() => { addToCart(product) }}>Add To Cart</button>
    </div>
  )
}

export default ProductCard