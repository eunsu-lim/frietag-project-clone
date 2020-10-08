import React, { useState } from "react";
import styled from "styled-components";

export default function Counter() {
  const [count, setCount] = useState(1);

  const minusCount = () => {
    setCount((prevNum) => prevNum - 1);
  };

  const plusCount = () => {
    setCount((prevNum) => prevNum + 1);
  };

  return (
    <ProductCount>
      <button onClick={minusCount} className="minusBtn"></button>
      <span>{count}</span>
      <button onClick={plusCount} className="plusBtn"></button>
    </ProductCount>
  );
}

const ProductCount = styled.div`
  display: flex;
  align-items: center;
  margin-left: 40px;
  width: 100px;
  border: none;
  text-align: center;
  font-size: 19px;
  outline: none;

  button {
    position: relative;
    display: flex;
    align-items: center;
    width: 24px;
    height: 24px;
    background-color: white;
    border: 1px solid #666;
    color: #666;
    outline: none;
    cursor: pointer;
    &:before {
      content: "";
      width: 12px;
      height: 2px;
      background-color: #666;
    }
    &.plusBtn {
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -6px;
        margin-left: -1px;
        width: 2px;
        height: 12px;
        background-color: #666;
      }
    }
  }
  span {
    width: 28px;
    text-align: center;
    font-size: 16px;
  }
`;
