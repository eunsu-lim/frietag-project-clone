import React, { useState, useEffect } from "react";
import Title from "./component/Title/Title";
import List from "./component/List.js/List";
import styled from "styled-components";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data/data.json")
      .then(response => response.json())
      .then(res => {
        setData(res.product);
      });
  }, []);

  return (
    <ProductListPage>
      {data
        .filter(el => el.category)
        .map((el, index) => (
          <Title key={index} productCategory={el.category} />
        ))}
      {data.map(el => (
        <>
          <List
            key={el.title}
            productTitle={el.title}
            productSubTitle={el.subTitle}
            productPrice={el.price}
            productId={el.id}
            productSub={el.sub}
          />
        </>
      ))}
    </ProductListPage>
  );
}

export default ProductList;

const ProductListPage = styled.section`
  max-width: 1170px;
  padding: 0 20px;
  margin: 0 auto;
`;
