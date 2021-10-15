import React, { useEffect } from "react";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import styled from "styled-components";

import SORT_TYPE from "../constant/sortType";

function SortButton({
  isMainColumn,
  columnIndex,
  sortType,
  setSortType,
  setResultList,
  resetSelected,
}) {
  useEffect(() => {
    const notZero = (num) => num !== 0;
    const sortStandardIndex = sortType.findIndex(notZero);
    const changedType = sortType[sortStandardIndex];

    let sortedFunction;

    switch (changedType) {
      case SORT_TYPE.ASC:
        sortedFunction = (a, b) =>
          a.figures[sortStandardIndex] - b.figures[sortStandardIndex];
        break;
      case SORT_TYPE.DESC:
        sortedFunction = (a, b) =>
          b.figures[sortStandardIndex] - a.figures[sortStandardIndex];
        break;
    }

    if (sortedFunction) {
      setResultList((prevList) => Array.from(prevList).sort(sortedFunction));
    }
  }, [sortType]);

  const changeSortType = () => {
    const currentType = sortType[columnIndex];
    const newSortType = Array.from(sortType).fill(SORT_TYPE.NONE);

    switch (currentType) {
      case SORT_TYPE.NONE:
      case SORT_TYPE.ASC:
        newSortType[columnIndex] = SORT_TYPE.DESC;
        break;
      case SORT_TYPE.DESC:
        newSortType[columnIndex] = SORT_TYPE.ASC;
        break;
    }

    if (isMainColumn) {
      resetSelected();
    }

    setSortType(newSortType);
  };

  return (
    <SortButtonContainer onClick={changeSortType}>
      <AscIcon
        className={sortType[columnIndex] === SORT_TYPE.ASC ? "light" : ""}
      />
      <DescIcon
        className={sortType[columnIndex] === SORT_TYPE.DESC ? "light" : ""}
      />
    </SortButtonContainer>
  );
}

export default React.memo(SortButton);

const SortButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: -24px;
  top: -2px;
  color: #cfcfcf;
`;

const AscIcon = styled(AiFillCaretUp)`
  &.light {
    color: #555;
  }
`;

const DescIcon = styled(AiFillCaretDown)`
  &.light {
    color: #555;
  }
`;
