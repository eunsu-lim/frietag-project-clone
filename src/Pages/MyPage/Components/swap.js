import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function Swap() {
  return (
    <>
      <OrdersInfo>
        Here you can register your FREITAG products and activate it with one
        click for S.W.A.P. if you want to exchange one.
      </OrdersInfo>
    </>
  );
}
export default Swap;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const OrdersInfo = styled.span`
  display: block;
  font-size: 17px;
  font-weight: 300;
  margin-bottom: 40px;
`;
