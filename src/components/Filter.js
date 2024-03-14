// components/Filter.js
import React, { useState } from "react";

import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;

  select {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  button {
    padding: 5px 15px;
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const Filter = ({ products, setFilteredProducts }) => {
  const [category, setCategory] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleFilter = () => {
    let filteredProducts = [...products];

    if (category) {
      filteredProducts = filteredProducts.filter((product) => product.category === category);
    }

    if (sortBy === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
        <FilterContainer>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">All Categories</option>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
      </select>
      <select onChange={(e) => setSortBy(e.target.value)}>
        <option value="">Sort by</option>
        <option value="price-asc">Price (Low to High)</option>
        <option value="price-desc">Price (High to Low)</option>
      </select>
      <button onClick={handleFilter}>Filter</button>
      </FilterContainer>
    </div>
  );
};

export default Filter;
