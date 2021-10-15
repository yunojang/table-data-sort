import React, { useState } from "react";
import styled from "styled-components";

import Columns from "./components/Columns";
import ResultRow from "./ResultRow";
import { loadSubList } from "./utils/api";

const INIT_SELECTED = {
  id: -1,
  subList: [],
};

function ResultTable({ resultList, setResultList }) {
  const [selected, setSelected] = useState(INIT_SELECTED);

  const resetSelected = () => setSelected(INIT_SELECTED);

  const toggleSubTable = async (id, name) => {
    const loadedSubList = await loadSubList(id, name);
    const alreadySelect = selected.id === id;

    if (alreadySelect) {
      resetSelected();
    } else {
      setSelected({ id, subList: loadedSubList });
    }
  };

  const setSubList = (callback) => {
    const subList = callback(Array.from(selected.subList));

    setSelected((prev) => ({ ...prev, subList }));
  };

  return (
    <TableContainer>
      <Columns setResultList={setResultList} resetSelected={resetSelected} />

      <ResultList>
        {resultList.map((result) => (
          <ResultRow
            key={result.id}
            result={result}
            toggleSubTable={toggleSubTable}
            subList={selected.subList}
            setSubList={setSubList}
            showSub={selected.id === result.id}
          />
        ))}
      </ResultList>
    </TableContainer>
  );
}

export default ResultTable;

const TableContainer = styled.section`
  width: 100%;

  &.sub {
  }
`;

const ResultList = styled.ul`
  & > li + li {
    border-top: 1px solid #eee;
  }
`;
