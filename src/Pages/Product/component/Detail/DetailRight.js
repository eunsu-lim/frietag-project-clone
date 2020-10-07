import React, { useState } from "react";
import SelectColor from "./SelectColor";
import DropDown from "./DropDown";
import Cart from "./Cart";
import styled, { css } from "styled-components";

function DetailRight() {
  return (
    <RightBox>
      <Header>
        <h3>MALE SHIRT</h3>
        <span>THE FREE SHIRT, ₩241,000</span>
      </Header>
      <SelectColor />
      <DropDown />
      <Cart />
    </RightBox>
  );
}

export default DetailRight;

const RightBox = styled.section`
  width: 60%;
  padding: 40px 10px 10px 10px;
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
