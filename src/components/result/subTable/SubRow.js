import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { formatResult } from "../utils/format";
import { addItem } from "store/actions/selected";

function SubRow({ topData: { id, name }, subData }) {
  const dispatch = useDispatch();
  const { id: subId, figures } = subData;

  const selected = useSelector((state) => state.selected);
  const { items } = selected;
  const isSelect = items.some((item) => item.id === id && item.subId === subId);

  const addSelectItem = () => {
    if (!isSelect) {
      dispatch(addItem({ id, subId, name }));
    }
  };

  return (
    <Row onClick={addSelectItem} className={isSelect && "select"}>
      <Result>
        <li>{subId}</li>
        {figures.map((figure, idx) => (
          <li key={idx}>{formatResult(figure)}</li>
        ))}
      </Result>
    </Row>
  );
}

export default SubRow;

const Row = styled.li`
  cursor: pointer;
  font-size: 13px;
  padding: 6px 0;

  &.select {
    cursor: auto;
    background: #e5e5e5;
  }
`;

const Result = styled.ul`
  display: flex;

  & > li {
    flex: 1;
    text-align: center;
  }
`;
