import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ArrowDownShort } from "@styled-icons/bootstrap/ArrowDownShort";
import { DownArrowAlt } from "@styled-icons/boxicons-solid/DownArrowAlt";

function Addresses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Data/AddressInfo.json")
      .then((res) => res.json())
      .then((list) => {
        setData(list.AddressInfo);
      });
  }, []);

  return (
    <MyPageList>
      <h3>
        ADDRESSES
        <ArrowDownShort width="20px" />
      </h3>
      <MypageListInfo>
        <Address>
          <AddressInfoHeader>SHIPPING ADDRESS</AddressInfoHeader>
          <AddressInfoList>Country / Region</AddressInfoList>
          <LocateList>
            South Korea
            <DownArrowAlt width="20px" />
          </LocateList>
          {data.map((el) => {
            return (
              <>
                <AddressInfoList>{el.name}</AddressInfoList>
                <Input />
              </>
            );
          })}
          <FormSubmitBtn type="submit" value="SAVE CHANGES" />
          <InputCancel type="reset" value="CANCEL CHANGES" />
        </Address>
        <Address>
          <AddressInfoHeader>BILLING ADDRESS</AddressInfoHeader>
          <AddressInfoList>Country / Region</AddressInfoList>
          <LocateList>
            South Korea
            <DownArrowAlt width="20px" />
          </LocateList>
          {data.map((el) => {
            return (
              <>
                <AddressInfoList>{el.name}</AddressInfoList>
                <Input />
              </>
            );
          })}
        </Address>
      </MypageListInfo>
    </MyPageList>
  );
}
export default Addresses;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const MyPageList = styled.div`
  border-top: 1px solid #000;

  h3 {
    margin: 17px 0;
    font-size: 17px;
    cursor: pointer;
    ${flexBox("space-between", "default", "default")};
  }
`;

const MypageListInfo = styled.div`
  ${flexBox("default", "default", "space-between")};
  width: 94%;
  margin-right: -100%;
  margin-left: 0;
`;

const Address = styled.div`
  margin-right: 10%;
  width: 40%;
  font-weight: 500;
`;

const AddressInfoHeader = styled.span`
  display: block;
  font-size: 16px;
  margin-bottom: 20px;
`;

const AddressInfoList = styled.span`
  display: block;
  margin-bottom: 7px;
  font-size: 13px;
`;

const LocateList = styled.div`
  width: 120px;
  margin-bottom: 17px;
  padding-bottom: 3px;
  border-bottom: 2px solid black;
  font-size: 14px;
  font-weight: 300;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-bottom: 15px;
  padding: 0 0 5px 0;
  border: none;
  border-bottom: solid 2px #000;
  &:focus {
    border-bottom: solid 2px #adc088;
    outline: none;
  }
`;

const FormSubmitBtn = styled.input`
  background-color: #000;
  margin-bottom: 20px;
  padding: 10px 20px;
  border: medium none;
  letter-spacing: 0.25px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #fff;
`;

const InputCancel = styled.input`
  display: block;
  margin-bottom: 40px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;
`;
