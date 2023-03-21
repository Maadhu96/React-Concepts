import React from 'react'
import Products from './Products'
import JSON from "../ReactProject2/product.json"
import { useState } from 'react';
const App10 = () => {
    let [products,setProducts]=useState(JSON)
  return (
      <section>
          <article>
              <Products products={ products} />
          </article>
    </section>
  )
}
export default App10