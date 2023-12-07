import React, { useContext } from "react"
import { AppContext } from "./Product";

const Cart = () => {

  const data = useContext(AppContext)
  const { cart, setCart } = data

  console.log(cart)

  const removeFromCart = (itemToRemove) => {

    const isConfirmed = window.confirm("Are you sure you want to add this item to the cart?");

    if (isConfirmed) {
      const updatedCart = cart.filter((item) => {
        return item !== itemToRemove
      })
      setCart(updatedCart)
    }
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0)
  }

  if (cart.length === 0) {
    return <h1>No items in cart</h1>
  }
  else {

    return (

      <div className="cart_container">
        <h1 className="cart_heading">Cart</h1>
        <h2>Total:${calculateTotal()}</h2>

        <div className="wrapper">

          {
            cart.map((item, index) => (

              <div key={index} className="card">
                <img src={item.image} alt="img" />
                <h2 className="heading">{item.title}</h2>
                <h2 className="heading_two">${item.price}</h2>
                <button className="btn" onClick={() => removeFromCart(item)}>Remove</button>
              </div>

            ))
          }
        </div>
      </div>

    )
  }
}

export default Cart;