import React, { useState } from "react";
import Footer from "./Footer";
import NavList from "./NavList";
import NAVIGATION from "./NavListData";
import styled from "styled-components";
import { User } from "@styled-icons/boxicons-solid/User";
import { Search, LocationOn } from "@styled-icons/material";

export default function Nav() {
  const [navList, setNavList] = useState(NAVIGATION);

  return (
    <NavContainer>
      <UserInfo>
        <span className="login">
          <User size="12" />
          LOGIN
        </span>
        <span className="language">
          <img
            alt="Korean Flag"
            src="https://cdn.countryflags.com/thumbs/south-korea/flag-400.png"
          />
          EN
        </span>
      </UserInfo>
      <TopSection>
        <li>
          <span>
            <Search size="25" />
            <span className="navSpan">SEARCH</span>
          </span>
        </li>
        <li>
          <span>
            <LocationOn size="25" />
            <span className="navSpan">STORES</span>
          </span>
        </li>
      </TopSection>
      {navList.map((category, index) => {
        return <NavList category={category} key={index} index={index} />;
      })}
      <Footer />
    </NavContainer>
  );
}

const NavContainer = styled.div`
  width: 300px;
  height: 100vh;
  padding-top: 50px;
  background-color: white;
  border-right: solid 1px #ececec;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const UserInfo = styled.div`
  ${({ theme }) => theme.flex("space-between", "center", "")}
  width: 299px;
  height: 50px;
  padding: 17px 20px 13px 20px;

  span {
    ${({ theme }) => theme.flex("space-between", "center", "")}
    font-weight: 600;
    font-size: 13.5px;
    cursor: pointer;
    &:hover {
      color: gray;
    }
    &.language {
      width: 48px;
    }
    &.login {
      width: 60px;
    }

    img {
      width: 23px;
      height: auto;
      border: 1px solid #ececec;
    }
  }
`;

const TopSection = styled.ul`
  ${({ theme }) => theme.flex("space-between", "flex-start", "")}
  width: 299px;
  height: 60px;

  li {
    ${({ theme }) => theme.flex("flex-start", "center", "")}
    width: 149.5px;
    height: 60px;
    padding: 15px;
    border-top: solid 1px #ececec;
    font-weight: 600;
    font-size: 13.5px;
    cursor: pointer;
    &:first-child {
      border-right: solid 1px #ececec;
    }

    span.navSpan {
      margin-left: 10px;
    }

    span:hover {
      color: gray;
    }
  }
`;