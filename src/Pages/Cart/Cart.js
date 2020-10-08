import React, { useState, useEffect } from "react";
import CartItem from "./Component/CarItem";
import styled from "styled-components";
import { ShoppingCart } from "@styled-icons/material";

export default function Cart() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data/CartData.json")
      .then((response) => response.json())
      .then((res) => {
        console.log("res", res);
        console.log("res.products", res.product);
        setProducts(res.product);
      });
  }, []);

  return (
    <CartContainer>
      <CartBox>
        <CartTitle>SHOPPING CART</CartTitle>
        <CartCount>7 Items</CartCount>
        <CartList>
          {products.map((el) => {
            console.log(el.sub);
            return (
              <CartItem key={el.id} product={el.title} productList={el.sub} />
            );
          })}
        </CartList>
        <CartTotal>
          <CartText>TOTAL</CartText>
          <TotalPrice>₩ 3,260,000</TotalPrice>
        </CartTotal>
        <CartBottom>
          <Back>← BACK TO STORE</Back>
          <CartBtn>
            <ShoppingCartIcon />
            <span>PROCEED TO CHECKOUT</span>
          </CartBtn>
        </CartBottom>
      </CartBox>
    </CartContainer>
  );
}

const CartContainer = styled.section`
  margin-top: 100px;
  width: 100%;
`;

const CartBox = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  width: 1170px;
`;

const CartTitle = styled.h3`
  font-size: 30px;
  line-height: 1.2;
`;

const CartCount = styled.p`
  font-size: 19px;
`;

const CartList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
  border-top: 1px solid #ececec;
`;

const CartTotal = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

const CartText = styled.h4`
  font-size: 19px;
  font-weight: bold;
`;

const TotalPrice = styled.p`
  font-size: 40px;
  font-weight: bold;
  text-align: right;
`;

const CartBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 24px;
`;

const Back = styled.p`
  font-size: 16px;
  cursor: pointer;
`;

const CartBtn = styled.button`
  padding: 12px 24px;
  background-color: #000;
  border: none;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

const ShoppingCartIcon = styled(ShoppingCart)`
  color: white;
  width: 24px;
  margin-right: 4px;
`;
