import React, { useState, useEffect } from "react";
import Addresses from "./Components/addresses";
import NewLetter from "./Components/newsLetter";
import Orders from "./Components/orders";
import Swap from "./Components/swap";
import UserNamePw from "./Components/userNamePw";
import styled, { css } from "styled-components";
import { ArrowDownShort } from "@styled-icons/bootstrap/ArrowDownShort";

function MyPage() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownA, setDropdownA] = useState(false);
  const [dropdownB, setDropdownB] = useState(false);
  const [dropdownC, setDropdownC] = useState(false);
  const [dropdownD, setDropdownD] = useState(false);

  return (
    <>
      <Main>
        <Header>
          <div>
            <h1>HOI KOJAE</h1>
          </div>
        </Header>
        <Container>
          <Section>
            <CategoryList onClick={() => setDropdown(!dropdown)}>
              NEWSLETTER
              <ArrowDownShort width="20px" />
            </CategoryList>
            <DropDown>{dropdown && <NewLetter />}</DropDown>
            <CategoryList onClick={() => setDropdownA(!dropdownA)}>
              USERNAME & PASSWORD
              <ArrowDownShort width="20px" />
            </CategoryList>
            <DropDown>{dropdownA && <UserNamePw />}</DropDown>
            <CategoryList onClick={() => setDropdownB(!dropdownB)}>
              ADDRESSES
              <ArrowDownShort width="20px" />
            </CategoryList>
            <DropDown>{dropdownB && <Addresses />}</DropDown>
            <CategoryList onClick={() => setDropdownC(!dropdownC)}>
              ORDERS
              <ArrowDownShort width="20px" />
            </CategoryList>
            <DropDown>{dropdownC && <Orders />}</DropDown>
            <CategoryList onClick={() => setDropdownD(!dropdownD)}>
              YOUR PRODUCTS + S.W.A.P
              <ArrowDownShort width="20px" />
            </CategoryList>
            <DropDown>{dropdownD && <Swap />}</DropDown>
            <HowToSwap>HOW TO S.W.A.P</HowToSwap>
            <p>LOGOUT</p>
          </Section>
        </Container>
      </Main>
    </>
  );
}
export default MyPage;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const Main = styled.main`
  padding-top: 100px;
`;

const Header = styled.header`
  display: block;
  height: 110px;
  div {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1170px;

    h1 {
      font-size: 60px;
      line-height: 1.1;
      text-transform: uppercase;
    }
  }
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1170px;
`;

const Section = styled.section`
  width: 65.9574468085%;
  margin-right: -100%;
  margin-left: 0;
  clear: left;
  P {
    width: 100px;
    margin-top: 50px;
    padding: 10px 9px;
    text-align: center;
    font-weight: 600;
    color: white;
    background-color: black;
  }
`;

const CategoryList = styled.h3`
  margin: 17px 0;
  padding-top: 20px;
  font-size: 17px;
  border-top: 1px solid #000;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const DropDown = styled.div``;

const HowToSwap = styled.span`
  background-color: #adc088;
  font-size: 19px;
  font-weight: 400;
`;
