// App.js
import React, { useState } from "react";
import products from "./Data/Products";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import styled from "styled-components";

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

function App() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <AppContainer>
      <div>
        <h1 style={{ textAlign: "center" }}>Product Listing</h1>
        <Filter products={products} setFilteredProducts={setFilteredProducts} />
        <ProductList products={currentProducts} />
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={filteredProducts.length}
          paginate={paginate}
        />
      </div>
    </AppContainer>
  );
}

export default App;
