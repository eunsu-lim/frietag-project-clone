import React from "react";
import SelectColor from "./SelectColor";
import DropDown from "./DropDown";
import Cart from "./Cart";
import styled from "styled-components";

function DetailRight({ product, allItem, url, items }) {
  return (
    <RightBox>
      <Header>
        <h3>{allItem.name}</h3>
        <span>
          {allItem.description}, ￦{allItem.price}
        </span>
      </Header>
      <SelectColor
        productId={allItem.id}
        allItem={allItem}
        url={url}
        items={items}
      />
      <DropDown />
      <Cart />
    </RightBox>
  );
}

export default DetailRight;

const RightBox = styled.section`
  width: 60%;
  padding: 60px 10px 10px 10px;
`;

const Header = styled.header`
  display: flex;
  flex-direction: column;
  font-size: 28px;

  span {
    font-weight: 300;
    font-size: 16px;
  }
`;
