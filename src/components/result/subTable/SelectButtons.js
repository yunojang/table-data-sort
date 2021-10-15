import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "store/actions/selected";
import styled from "styled-components";

function SelectButtons({ topData, subList }) {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);
  const { items: selectedList } = selected;

  const mapSubList = (item) => ({
    id: topData.id,
    name: topData.name,
    subId: item.id,
  });
  const subRows = subList.map(mapSubList);

  const includesSelected = (row) =>
    selectedList.some((s) => s.id === row.id && s.subId === row.subId);

  const checkAll = () => {
    const notIncludesRow = subRows.filter((row) => !includesSelected(row));

    for (const newItem of notIncludesRow) {
      dispatch(addItem(newItem));
    }
  };

  const clear = () => {
    const includesRow = subRows.filter(includesSelected);

    for (const newItem of includesRow) {
      dispatch(removeItem(newItem));
    }
  };

  return (
    <Conatiner>
      <AllCheckButton onClick={checkAll}>Check All</AllCheckButton>
      <ClearButton onClick={clear}>Clear</ClearButton>
    </Conatiner>
  );
}

export default SelectButtons;

const Conatiner = styled.div`
  button {
    color: white;
    padding: 8px 14px;
    margin-right: 8px;
    font-weight: bold;
    border-radius: 3px;
  }
`;

const AllCheckButton = styled.button`
  background: #7983db;
`;

const ClearButton = styled.button`
  background: #dc7a84;
`;
