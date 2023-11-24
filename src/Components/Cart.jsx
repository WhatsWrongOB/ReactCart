import React from "react"

const Cart = ({ cartItem, setCart }) => {

  const removeFromCart = (itemToRemove) => {

    const isConfirmed = window.confirm("Are you sure you want to add this item to the cart?");

    if (isConfirmed) {
      const updatedCart = cartItem.filter((item) => {
        return item !== itemToRemove
      })
      setCart(updatedCart)
    }
  }

  const updateQuantity = (item, newQuantity) => {
    const updatedCart = cartItem.map(cartItem =>
      cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
   return  cartItem.reduce((total,item) =>  total +  item.price * item.quantity , 0)
  }

  return (

    <div className="cart_container">
      <h1 className="cart_heading">Cart</h1>
      <h2>Total:${calculateTotal()}</h2>

      <div className="wrapper">

        {
          cartItem.map((item) => (

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

export default Cart;