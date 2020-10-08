import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import styled from "styled-components";

function Detail({ productId, items }) {
  const [selected, setSelected] = useState({});
  const [allItem, setAllItem] = useState([]);
  const { id } = useParams();

  console.log(id);

  // useEffect(() => {
  //   setTimeout(() => {
  //     fetch("http://localhost:3000/Data/ProductData.json")
  //       .then(response => response.json())
  //       .then(res => {
  //         const allShirts = res.product[0].sub;
  //         setAllItem(res.product[0]);
  //         setSelected(allShirts[productId - 1]);
  //       });
  //   }, 2000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch(`http://10.58.3.66:8000/product/${id}`)
        .then(response => response.json())
        .then(res => {
          const allShirts = res;
          setAllItem(res);
          setSelected(res[productId - 1]);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    console.log(allItem);
  }, [allItem]);

  if (
    // !selected ||
    allItem.length === 0
  )
    return (
      <LoadingImage>
        <span>로딩 중</span>
      </LoadingImage>
    );

  return (
    <DetailContainer>
      <DetailBlack>
        <DetailWhite>
          <DetailLeft url={allItem.detailImage} />
          <DetailRight
            url={allItem.detailImage}
            allItem={allItem}
            product={selected}
            items={items}
          />
        </DetailWhite>
      </DetailBlack>
    </DetailContainer>
  );
}

export default Detail;

const DetailContainer = styled.article`
  width: 100%;
  margin: 0 auto;
`;

const DetailBlack = styled.section`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  background-color: black;
  margin-bottom: 50px;
  margin-top: 3em;
`;

const DetailWhite = styled.section`
  max-width: 1170px;
  display: flex;
  margin: 20px auto;
  background-color: #fff;
`;

const LoadingImage = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin-bottom: 50px;
  justify-content: center;
  align-items: center;

  img {
    width: 200px;
    height: auto;
  }
`;
