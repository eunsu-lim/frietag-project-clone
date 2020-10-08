import React from "react";
import ProductCount from "./ProductCount";
import styled from "styled-components";
import { Delete } from "@styled-icons/material";

export default function CarItem(props) {
  console.log("props", props);
  const cartItemList = props;
  return (
    <CartItem>
      {cartItemList.productList.map((el) => {
        return (
          <CartItemBox key={el.id}>
            <ProductName>{el.title}</ProductName>
            <ProductImgBox>
              <ProductImg src={el.url} />
            </ProductImgBox>
            <ProductCount />
            <ProductPrice>₩ {el.price}</ProductPrice>
            <ProductDel />
          </CartItemBox>
        );
      })}
    </CartItem>
  );
}

const CartItem = styled.div``;

const CartItemBox = styled.li`
  display: flex;
  align-items: center;
  padding: 16px 0;
  width: 100%;
  border-bottom: 1px solid #ececec;
`;

const ProductName = styled.h3`
  flex: 3;
  font-size: 22px;
  line-height: 1.2;
  font-weight: bold;
  text-transform: uppercase;
`;

const ProductImgBox = styled.div`
  width: 100px;
  height: 100px;
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
`;

const ProductPrice = styled.span`
  flex: 2;
  font-size: 19px;
  color: #000;
  text-align: right;
`;

const ProductDel = styled(Delete)`
  padding: 1px 2px;
  margin-left: 24px;
  width: 24px;
  text-align: right;
  color: #666;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
