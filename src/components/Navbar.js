import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "constant/color";

const navList = ["Alpha", "Bravo", "Charlie", "Delta", "Echo", "Result"];

function Navbar() {
  const [selectIndex, setSelectIndex] = useState(5);

  return (
    <NavbarContainer>
      <NavList>
        {navList.map((name, idx) => (
          <li
            key={idx}
            className={idx === selectIndex ? "selected" : ""}
            onClick={() => setSelectIndex(idx)}
          >
            {name}
          </li>
        ))}
      </NavList>

      <ProjectName>Project name</ProjectName>
    </NavbarContainer>
  );
}

export default Navbar;

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: auto;
  padding: 0px 40px;
  border-radius: 12px;
  box-shadow: 0 4px 4px 0 rgba(120, 120, 120, 0.5);
  user-select: none;
`;

const NavList = styled.ul`
  display: flex;

  li {
    transition: 0.15s;
    font-size: 17px;
    padding: 16px;
    cursor: pointer;
  }

  li + li {
    margin-left: 22px;
  }

  li.selected {
    font-weight: bold;
    text-shadow: 0 3px 6px rgba(140, 140, 140, 0.5);
  }
`;

const ProjectName = styled.span`
  font-weight: bold;
  color: ${COLOR.MAIN};
`;
