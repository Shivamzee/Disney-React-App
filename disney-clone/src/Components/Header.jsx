import React from "react";
import styled from "styled-components";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { auth, provider } from "../firebase";

const Header = () => {
  console.log("hello");
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Nav>
      <Logo>
        <img src="/Images/logo.svg" alt="logo-Disney" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src="/Images/home-icon.svg" alt="Home" />
          <span>Home</span>
        </a>
        <a href="/search">
          <img src="/Images/search-icon.svg" alt="Home" />
          <span>Search</span>
        </a>
        <a href="/watchlist">
          <img src="/Images/watchlist-icon.svg" alt="Home" />
          <span>Watchlist</span>
        </a>
        <a href="/original">
          <img src="/Images/original-icon.svg" alt="Home" />
          <span>Originals</span>
        </a>
        <a href="/movie">
          <img src="/Images/movie-icon.svg" alt="Home" />
          <span>Movies</span>
        </a>
        <a href="/series">
          <img src="/Images/original-icon.svg" alt="Home" />
          <span>Series</span>
        </a>
      </NavMenu>
      <Login onClick={signInWithGoogle}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  padding: 0 36px;
  align-items: center;
  letter-spacing: 16px;
  z-index: 3;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 15px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: #000;
  font-size: 18px;
  padding: 8px 16px;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 3px;

  &:hover {
    color: #000;
    background-color: #f9f9f9;
  }
`;

export default Header;
