import React from "react";
import DetailLeft from "./DetailLeft";
import DetailRight from "./DetailRight";
import styled from "styled-components";

function Detail() {
  return (
    <DetailContainer>
      <DetailBlack>
        <DetailWhite>
          <DetailLeft />
          <DetailRight />
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
  padding: 20px;
  margin: 20px auto;
  background-color: #fff;
`;
