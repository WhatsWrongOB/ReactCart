import React from 'react'
import './App.css'
import Product from './Components/Product'
import Cart from './Components/Cart';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Product />}/>
        <Route exact path='/cart' element={<Cart />}/>
    </Routes>
    </Router>
  )
}

export default App