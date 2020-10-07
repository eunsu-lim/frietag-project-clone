import React from "react";
import styled from "styled-components";

export default function SubCategory({ subcategory }) {
  return (
    <SubTitle key={subcategory.id}>
      <h5>{subcategory.title}</h5>
    </SubTitle>
  );
}

const SubTitle = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "")}
  width: 299px;
  height: 38px;
  position: relative;
  padding: 5px 15px;
  cursor: pointer;
  &:hover {
    color: gray;
  }

  h5 {
    font-size: 13.5px;
  }
`;
