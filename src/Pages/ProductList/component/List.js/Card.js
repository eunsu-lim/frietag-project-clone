import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <CardImage href="#/">
      <ViewsImg
        src={props.productUrl}
        alt={props.productColor + props.productTitle}
      />
    </CardImage>
  );
}

export default Card;

const CardImage = styled.a`
  width: 25%;
  padding: 5px;
`;

const ViewsImg = styled.img`
  max-width: 100%;
  vertical-align: bottom;
`;
