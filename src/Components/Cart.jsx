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

  const updateQuantity = (item, newQuantity) => {
    const updatedCart = cart.map(cartItem =>
      cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  if (cart.length == 0) {
    return <h1>No items in cart</h1>
  }
  else {

    return (

      <div className="cart_container">
        <h1 className="cart_heading">Cart</h1>
        <h2>Total:${calculateTotal()}</h2>

        <div className="wrapper">

          {
            cart.map((item) => (

              <div className="card">
                <img src={item.img} alt="img" />
                <h2 className="heading">{item.name}</h2>
                <h2 className="heading_two">{item.price}</h2>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item, parseInt(e.target.value, 10))}
                />
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