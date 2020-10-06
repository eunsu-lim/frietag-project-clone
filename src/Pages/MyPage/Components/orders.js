import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function Orders() {
  return (
    <>
      <OrdersInfo>SHIPPING ADDRESS</OrdersInfo>
      <FormSubmitBtn type="submit" value="CUSTOMER SERVICE" />
    </>
  );
}
export default Orders;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const OrdersInfo = styled.span`
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const FormSubmitBtn = styled.input`
  background-color: #000;
  margin-bottom: 50px;
  padding: 10px 20px;
  border: medium none;
  letter-spacing: 0.25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
`;
