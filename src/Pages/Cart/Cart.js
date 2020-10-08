import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import CartItem from "./Component/CarItem";
import styled from "styled-components";
import { ShoppingCart } from "@styled-icons/material";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [price, setTotalPrice] = useState(0);
  const [amount, setTotalAmount] = useState(0);

  const handleCount = (id, className) => {
    const productsCopy = products;
    const clickedItem = products.find((item) => item.id === id);
    const clickedIdx = products.findIndex((item) => item.id === id);
    productsCopy[clickedIdx] = clickedItem;
    if (className === "plusBtn") {
      clickedItem.count++;
      setProducts([...productsCopy]);
    } else {
      clickedItem.count--;
      setProducts([...productsCopy]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://localhost:3000/Data/CartData.json`);
      setProducts(result.data.product);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const price = products.reduce((acc, item) => {
      return acc + item.count * item.price;
    }, 0);
    setTotalPrice(price);
  }, [products]);

  useEffect(() => {
    const amount = products.reduce((acc, item) => {
      return acc + item.count;
    }, 0);
    setTotalAmount(amount);
  }, [products]);

  return (
    <CartContainer>
      <Header />
      <CartBox>
        <CartTitle>SHOPPING CART</CartTitle>
        <CartCount>{amount} Items</CartCount>
        <CartList>
          {products.map((cartProduct) => {
            return (
              <CartItem
                key={cartProduct.id}
                product={cartProduct}
                handleCount={(id, className) => handleCount(id, className)}
                products={products}
                setProducts={setProducts}
              />
            );
          })}
        </CartList>
        <CartTotal>
          <CartText>TOTAL</CartText>
          <TotalPrice>₩ {price.toLocaleString()}</TotalPrice>
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
  width: 100%;
`;

const CartBox = styled.div`
  margin: 0 auto;
  padding: 100px 20px 0;
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
