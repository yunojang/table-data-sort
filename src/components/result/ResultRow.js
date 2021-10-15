import React from "react";
import styled from "styled-components";

import COLOR from "constant/color";
import { formatResult } from "./utils/format";

import SubTable from "./subTable";

function ResultRow({ result, toggleSubTable, subList, setSubList, showSub }) {
  const { id, name, figures } = result;

  return (
    <Row>
      <Result>
        <li>
          <NameButton onClick={() => toggleSubTable(id, name)}>
            {name}
          </NameButton>
        </li>

        {figures.map((figure, idx) => (
          <li key={idx}>{formatResult(figure)}</li>
        ))}
      </Result>

      {showSub && (
        <SubTable topData={result} subList={subList} setSubList={setSubList} />
      )}
    </Row>
  );
}

export default ResultRow;

const Row = styled.li`
  padding: 8px 0;
`;

const Result = styled.ul`
  display: flex;
  align-items: center;

  li {
    flex: 1;
    text-align: center;
  }
`;

const NameButton = styled.button`
  width: 110px;
  height: 32px;
  border: 1px solid ${COLOR.MAIN};
  font-size: 17px;
  font-weight: bold;
  color: ${COLOR.MAIN};
`;
