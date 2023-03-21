import React from 'react'

const Product = ({title,description,price,image}) => {
    
  return (
    <div>
      <figure>
        <img src={image} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
        <button>{price+" USD"}</button>
      </figure>
    </div>
  );
}

export default Product