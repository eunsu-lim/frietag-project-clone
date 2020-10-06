import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { DownArrowAlt } from "@styled-icons/boxicons-solid/DownArrowAlt";

function NewLetter() {
  return (
    <>
      <MypageListInfo>
        <NewsLetterInfo>Language</NewsLetterInfo>
        <LanguageList>
          English
          <DownArrowAlt width="20px" />
        </LanguageList>
        <NewsLetterInfo>Gender</NewsLetterInfo>
        <GenderList>
          - Select -
          <DownArrowAlt width="20px" />
        </GenderList>
        <NewsLetterInfo>When did you come about?</NewsLetterInfo>
        <DateOfBirth>
          <DayList>
            1
            <DownArrowAlt width="20px" />
          </DayList>
          <MonthList>
            Jan
            <DownArrowAlt width="20px" />
          </MonthList>
          <YearList>
            1994
            <DownArrowAlt width="20px" />
          </YearList>
        </DateOfBirth>
        <NewsLetterInfo>Where do you live?</NewsLetterInfo>
        <LocateList>
          South Korea
          <DownArrowAlt width="20px" />
        </LocateList>
        <NewsLetterInfo>
          What do you like?
          <div>
            Or rather, do you like us because we are who we are, because we do
            what we do or because we smell good, just like our bags? Select your
            favorite topics here so we can do our best to get to know each other
            better. Thanks a million!
          </div>
        </NewsLetterInfo>
      </MypageListInfo>
    </>
  );
}
export default NewLetter;

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

const LanguageList = styled.div`
  width: 100px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 18px;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const GenderList = styled.div`
  width: 100px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 18px;
  cursor: pointer;
  color: gray;
  ${flexBox("space-between", "default", "default")};
`;

const DateOfBirth = styled.div`
  display: flex;
`;

const DayList = styled.div`
  width: 40px;
  margin-bottom: 17px;
  margin-right: 8px;
  border-bottom: 2px solid black;
  font-size: 18px;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const MonthList = styled.div`
  width: 60px;
  margin-right: 8px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 18px;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const YearList = styled.div`
  width: 60px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 18px;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;

const LocateList = styled.div`
  width: 125px;
  margin-bottom: 17px;
  border-bottom: 2px solid black;
  font-size: 16px;
  cursor: pointer;
  ${flexBox("space-between", "default", "default")};
`;
