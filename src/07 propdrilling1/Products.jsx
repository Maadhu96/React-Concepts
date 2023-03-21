import React from 'react'
import Product from './Product'

const Products = (props) => {
  return (
      <div>
          <h1>List of PRODUCTS</h1>
          {
              props.products.map((val, index) => {
                  return <Product key={index + 1} {...val} />
              })
          }
    </div>
  )
}

export default Products