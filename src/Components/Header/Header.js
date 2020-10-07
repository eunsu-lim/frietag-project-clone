import React, { useState } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import { MenuOutline } from "@styled-icons/evaicons-outline/MenuOutline";
import { ShoppingCart } from "@styled-icons/material/ShoppingCart";
import { BellRing } from "@styled-icons/boxicons-solid/BellRing";

export default function Header() {
  const [isNav, setIsNav] = useState(true);

  return (
    <Main>
      <HeaderContainer>
        <Logo />
        <IconBox
          menu
          onClick={() => {
            setIsNav(!isNav);
          }}
          isNav={isNav}
        >
          <MenuOutline size="24" />
        </IconBox>
        <IconBox>
          <span>1</span>
          <ShoppingCart size="22" color="white" />
        </IconBox>
        <IconBox>
          <BellRing size="18" color="white" />
        </IconBox>
      </HeaderContainer>
      {isNav && <Nav />}
    </Main>
  );
}

const Main = styled.main`
  position: relative;
`;

const HeaderContainer = styled.header`
  display: flex;
  position: absolute;
  width: 300px;
  height: 50px;
  z-index: 1000;
`;

const IconBox = styled.div`
  ${({ theme }) => theme.flex("center", "center", "")}
  width: 50px;
  height: 50px;
  background-color: ${(props) => (props.isNav ? "white" : "#666")};
  color: ${(props) => (props.isNav ? "black" : "white")};
  &:hover {
    cursor: pointer;
  }
  span {
    color: white;
    font-size: 13px;
    font-weight: 500;
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 50px;
  background: url("/Image/kneetag_logo.png") no-repeat center center;
  background-size: 100% 100%;
  &:hover {
    cursor: pointer;
  }
`;
