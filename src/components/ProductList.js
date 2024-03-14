// components/ProductList.js
import React from "react";
import styled from "styled-components";

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 70px;
`;

const ProductItem = styled.div`

  border: 1px solid #ddd;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  img {
    max-width: 100%;
  }

  h3 {
    margin: 10px 0;
  }

  p {
    margin: 5px 0;
  }

`;

const ProductList = ({ products }) => {
  return (
    <div>
      <ProductContainer>
      {products.map((products) => (
        <ProductItem key={products.id}>
          <img src={products.imageURL} alt={products.title} />
          <h3>{products.title}</h3>
          <p>{products.description}</p>
          <p> ₹{products.price}</p>
        </ProductItem>
      ))}
      </ProductContainer>
    </div>
  );
};

export default ProductList;
