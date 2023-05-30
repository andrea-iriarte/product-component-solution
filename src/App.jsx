import { useState } from 'react'
import './App.css'
import ProductCard from './ProductCard'
import ProductCover from './ProductCover'
import product from './data/data'

import icon from './images/icon-cart.svg'

function App() {

  const productInfo = product();
  

  return (
    <div className='App'>
      <ProductCover />
      <ProductCard {...productInfo} />
    </div>
  )
}

export default App
