import React from "react";
import styled from "styled-components";

function Header() {
  return <HeaderContainer></HeaderContainer>;
}

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 80px;
  border-bottom: 3px solid #e8e8e8;
  margin-bottom: 30px;

  .logo {
    height: 38px;
  }
`;
