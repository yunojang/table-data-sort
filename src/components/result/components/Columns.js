import React, { useState } from "react";
import styled from "styled-components";

import { COLUMNS } from "../constant/column";
import SORT_TYPE from "../constant/sortType";
import SortButton from "./SortButton";

function Columns({ isSubTable, setResultList, resetSelected }) {
  const [sortType, setSortType] = useState(
    Array(COLUMNS.length).fill(SORT_TYPE.NONE)
  );
  const identifier = isSubTable ? "Id" : "Name";

  return (
    <ColumnsContainer className={isSubTable && "sub"}>
      <li>{identifier}</li>

      {COLUMNS.map((columnName, idx) => (
        <li key={idx}>
          <Column>
            {columnName}
            <SortButton
              isMainColumn={!isSubTable}
              columnIndex={idx}
              sortType={sortType}
              setSortType={setSortType}
              setResultList={setResultList}
              resetSelected={resetSelected}
            />
          </Column>
        </li>
      ))}
    </ColumnsContainer>
  );
}

export default Columns;

const ColumnsContainer = styled.ul`
  display: flex;
  padding: 20px 0;
  border-bottom: 1px solid #aaa;
  margin-bottom: 8px;
  font-size: 17px;
  font-weight: bold;

  &.sub {
    padding: 12px 0;
    border-bottom: 1px solid #d7d7d7;
    font-size: 14px;
    margin-bottom: 4px;
  }

  li {
    flex: 1;
    text-align: center;
  }
`;

const Column = styled.div`
  display: inline-block;
  position: relative;
`;
