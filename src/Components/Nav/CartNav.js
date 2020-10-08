import React from "react";
import styled from "styled-components";

export default function CartNav() {
  return <NavContainer>Shopping CART Redux 사용</NavContainer>;
}

const NavContainer = styled.div`
  width: 300px;
  height: 100vh;
  padding-top: 50px;
  background-color: white;
  border-right: solid 1px #ececec;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
