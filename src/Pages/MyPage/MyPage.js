import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import MY_PAGE_DATA from "./Components/Data/myPageData";
import MyPageList from "./Components/myPageList";
import Header from "../../Components/Header/Header";
function MyPage() {
  const history = useHistory();
  const [token, setToken] = useState("");

  useEffect(() => {
    const URL = window.location.href;
    setToken(URL.slice(URL.indexOf("=") + 1));
    history.push("/MyPage");
  }, []);

  const fetchData = () => {
    localStorage.setItem("token", token);
    fetch("http://10.58.7.117:8001/user/activate", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    }).then((res) => console.log(res));
  };

  useEffect(fetchData, [token]);
  return (
    <>
      <Header />
      <Main>
        <MainHeader>
          <div>
            <h1>HOI KOJAE</h1>
          </div>
        </MainHeader>
        <Container>
          <Section>
            {MY_PAGE_DATA.map((el, index) => {
              return <MyPageList el={el} key={index} />;
            })}
            <HowToSwap>HOW TO S.W.A.P</HowToSwap>
            <LogoutBtn>LOGOUT</LogoutBtn>
          </Section>
        </Container>
      </Main>
    </>
  );
}
export default MyPage;

const Main = styled.main`
  padding-top: 100px;
`;

const MainHeader = styled.header`
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
`;

const HowToSwap = styled.span`
  background-color: #adc088;
  font-size: 19px;
  font-weight: 400;
`;

const LogoutBtn = styled.div`
  width: 100px;
  margin-top: 50px;
  margin-bottom: 30px;
  padding: 10px 9px;
  text-align: center;
  font-weight: 500;
  color: white;
  background-color: black;
`;
