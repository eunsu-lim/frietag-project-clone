import React from "react";
import Title from "./component/Title/Title";
import Detail from "./component/Detail/Detail";
import ExtraInfo from "./component/ExtraInfo/ExtraInfo";
import styled from "styled-components";

function Product() {
  return (
    <ProductPage>
      <Title />
      <Detail />
      <ExtraInfo />
    </ProductPage>
  );
}

export default Product;

const ProductPage = styled.main`
  margin: 0 auto;
`;
