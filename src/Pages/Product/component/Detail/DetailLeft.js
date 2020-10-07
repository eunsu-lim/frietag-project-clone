import React from "react";
import styled from "styled-components";
import { MdAutorenew } from "react-icons/md";
import { MdRemoveRedEye } from "react-icons/md";
import { IoMdMan } from "react-icons/io";

function DetailLeft() {
  return (
    <LeftBox>
      <Nav>
        <ProductSlick>
          <MdAutorenew size="24" />
          <SliceName>PRODUCT</SliceName>
        </ProductSlick>
        <ProductSlick>
          <MdRemoveRedEye size="24" />
          <SliceName>DETAILS</SliceName>
        </ProductSlick>
        <ProductSlick>
          <IoMdMan size="24" />
          <SliceName>STYLE</SliceName>
        </ProductSlick>
      </Nav>
      <Picture>
        <a href="#/">
          <ProductImg
            src="https://freitag.rokka.io/neo-grid-2/7c6e096f36e5871b8940195f33aff2a8992c9a03/e783-male-shirt-black-lindasuter-rgb-highres.jpg"
            alt=""
          />
        </a>
      </Picture>
    </LeftBox>
  );
}

export default DetailLeft;

const LeftBox = styled.section`
  width: 40%;
  margin-bottom: 30px;
`;

const Nav = styled.nav`
  display: flex;

  padding: 10px;
`;

const ProductSlick = styled.div`
  display: flex;
  align-items: center;
  width: 27%;
`;

const SliceName = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Picture = styled.section``;

const ProductImg = styled.img`
  width: 452px;
`;
