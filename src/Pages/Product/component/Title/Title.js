import React from "react";
import styled from "styled-components";

function Title() {
  return (
    <HeaderContainer>
      <HeaderTopLeft>
        <span>
          <a href="#/" alt="hi">
            Store
          </a>
        </span>
        <span> » </span>
        <span>
          <a href="#/" alt="hi">
            Apparel male
          </a>
        </span>
        <span> » </span>
        <span>
          <a href="#/" alt="hi">
            Shirts
          </a>
        </span>
      </HeaderTopLeft>
      <HeaderLeft>E783</HeaderLeft>
      <HeaderBottomLeft>
        <h3>MALE SHIRT ₩241,000</h3>
        <span>THE FREE SHIRT</span>
      </HeaderBottomLeft>
    </HeaderContainer>
  );
}

export default Title;

const HeaderContainer = styled.header`
  padding-top: 100px;
  max-width: 1170px;
  margin: 0 auto;
  text-transform: uppercase;
  font-weight: bold;
`;

const HeaderTopLeft = styled.div`
  font-size: 14px;

  span:nth-child(2),
  span:nth-child(4) {
    font-size: 20px;
  }
`;

const HeaderLeft = styled.h1`
  font-size: 60px;
`;

const HeaderBottomLeft = styled.article`
  display: flex;
  flex-direction: column;
  padding: 2px 0 4px;
  font-size: 22px;

  span {
    font-weight: 300;
    font-size: 19px;
  }
`;
