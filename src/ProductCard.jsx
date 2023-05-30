import React from 'react'
import icon from './images/icon-cart.svg'

const ProductCard = ({ type, name, description, discountedPrice, originalPrice }) => {
  return (
    <div className='card'>

        <div className='card-container'>
            <p className='product-type'>{type}</p>
            <h1 className='product-title'>{name}</h1>
            <p className='description'>{description}</p>
            <div className='prices'>
                <h1 className='discounted-price'>${discountedPrice}</h1>
                <p className='original-price'>${originalPrice}</p>
            </div>
            <button className='button'>
                <img src={icon} alt="cart icon" className='icon' />
                <p className='add-to-cart'>Add to cart</p>
            </button>
        </div>
       
    </div>
  )
}

export default ProductCard