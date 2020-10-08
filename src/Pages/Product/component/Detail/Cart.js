import React, { useState } from "react";
import { HiShoppingCart } from "react-icons/hi";
import { FiPlusSquare } from "react-icons/fi";
import { FiMinusSquare } from "react-icons/fi";
import styled from "styled-components";

function Cart() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <ProductCount>
        <FiPlusSquare onClick={increment} size="35" />
        <ProductNumber>{count}</ProductNumber>
        <FiMinusSquare onClick={decrement} size="35" />
      </ProductCount>
      <CartBtn>
        <HiShoppingCart size="25" />
        <span>ADD TO CART</span>
      </CartBtn>
    </div>
  );
}

export default Cart;

const ProductCount = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductNumber = styled.span`
  margin: 0 10px;
  font-size: 25px;
  font-weight: bold;
`;

const CartBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  outline: none;
  cursor: pointer;
`;