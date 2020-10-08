import React, { useState, useEffect } from "react";
import Header from "../../Components/Header/Header";
import Title from "./component/Title/Title";
import List from "./component/List.js/List";
import styled from "styled-components";

function ProductList() {
  const [data, setData] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [productId, setProductId] = useState([]);
  const [filter, setFilter] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "http://localhost:3000/Data/postManProductList.json"
    );
    const { message } = await response.json();

    const chunk = (arr, size) =>
      arr.reduce(
        (acc, e, i) => (
          i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
        ),
        []
      );

    const firstArr = chunk(message, 6);
    // firstArr.unshift(firstArr[1]);
    // firstArr.pop();
    setData(firstArr);
    setProductId(message);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    fetchData();
  }, []);

  const filterHandler = color => {
    selectedFilter.includes(color)
      ? setSelectedFilter(selectedFilter.filter(el => el !== color))
      : setSelectedFilter([...selectedFilter, color]);
  };

  useEffect(() => {
    selectedFilter.length &&
      setFilter(data[0].sub.filter(el => selectedFilter.includes(el.color)));
    !selectedFilter.length && data.length && setFilter(data[0].sub);
  }, [selectedFilter]);

  const removeAllItems = () => {
    setSelectedFilter([]);
  };

  const toggleFilter = e => {
    setOpenFilter(e);
  };

  return (
    <>
      <Header
        openFilter={openFilter}
        filterHandler={e => filterHandler(e)}
        removeAllItems={e => removeAllItems(e)}
      />
      <ProductListPage>
        <Title
          toggleFilter={e => toggleFilter(e)}
          productCategory="APPREL MALE"
          categoryName={data.length === 2 && data[0][0].categoryName}
        />
        {data.map(el => (
          <>
            <List
              key={el[0].seriesName}
              productTitle={el[0].seriesName}
              productSubTitle="APPREL MALE"
              productPrice={Number(el[0].seriesPrice).toLocaleString()}
              productSub={el}
              productId={productId}
            />
          </>
        ))}
      </ProductListPage>
    </>
  );
}

export default ProductList;

const ProductListPage = styled.section`
  max-width: 1170px;
  padding: 0 20px;
  margin: 0 auto;

  button {
    position: absolute;
    right: 0;
  }
ㅋ`;
