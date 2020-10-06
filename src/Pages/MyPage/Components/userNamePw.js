import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ArrowDownShort } from "@styled-icons/bootstrap/ArrowDownShort";
import { DownArrowAlt } from "@styled-icons/boxicons-solid/DownArrowAlt";

function UserNamePw() {
  return (
    <MypageListInfo>
      <Label>E-mail</Label>
      <Input />
      <Label>Password</Label>
      <Input />
      <Label>Comfirm password</Label>
      <Input />
      <NewsLetterInfo>Where do you live?</NewsLetterInfo>
      <LocateList>
        Korean
        <DownArrowAlt width="20px" />
      </LocateList>
      <FormSubmitBtn type="submit" value="SAVE CHANGES" />
      <InputCancel type="reset" value="CANCEL CHANGES" />
    </MypageListInfo>
  );
}
export default UserNamePw;

const flexBox = (justify, align, content) => css`
  display: flex;
  justify-content: ${justify || "default"};
  align-items: ${align || "default"};
  align-content: ${content || "default"};
`;

const MypageListInfo = styled.div`
  width: 94%;
  margin-right: -100%;
  margin-left: 0;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const Input = styled.input`
  display: block;
  width: 40%;
  margin-bottom: 15px;
  padding: 0 0 5px 0;
  border: none;
  border-bottom: solid 2px #000;
  &:focus {
    border-bottom: solid 2px #adc088;
    outline: none;
  }
`;

const LocateList = styled.div`
  width: 80px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 16px;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const NewsLetterInfo = styled.div`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;

  div {
    font-size: 13px;
    color: gray;
    font-style: italic;
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
  margin-bottom: 50px;
  border: none;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 2px;
  cursor: pointer;
  background-color: transparent;
`;
