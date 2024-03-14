// components/Pagination.js
import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 10px;
    
    
  }

  li button {
    background-color: #007BFF;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    align-items:center;
  }
`;

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
        <PaginationContainer>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
      </PaginationContainer>
    </nav>
  );
};

export default Pagination;
