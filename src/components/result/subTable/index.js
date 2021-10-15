import React from "react";
import styled from "styled-components";

import SelectButtons from "./SelectButtons";
import Columns from "../components/Columns";
import SubRow from "./SubRow";

function subTable({ topData, subList, setSubList }) {
  return (
    <TableContainer>
      <SelectButtons topData={topData} subList={subList} />

      <Columns isSubTable={true} setResultList={setSubList} />

      <ResultList>
        {subList.map((subData) => (
          <SubRow key={subData.id} topData={topData} subData={subData} />
        ))}
      </ResultList>
    </TableContainer>
  );
}

export default subTable;

const TableContainer = styled.section`
  padding: 14px 38px;
  border-top: 1px solid #eee;
  margin-top: 14px;
  transform-origin: top;
  animation: 0.15s expandY cubic-bezier(0, 0, 0, 1);
`;

const ResultList = styled.ul`
  & > li + li {
    border-top: 1px solid #eee;
  }
`;
