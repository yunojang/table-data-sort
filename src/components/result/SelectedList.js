import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import COLOR from "constant/color";
import { removeItem } from "store/actions/selected";

const ITEM_COUNT_ONELINE = 5;
const ITEM_HEIGHT = 42;

function SelectedList() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.selected);
  const { items } = selected;
  const [isExpand, setIsExpand] = useState(false);

  const onDelte = (item) => {
    dispatch(removeItem(item));
  };

  const extandsToggle = () => {
    setIsExpand((prev) => !prev);
  };

  let className = items.length < 1 ? "empty" : isExpand && "expand";

  return (
    <Container>
      <SelectedListUl
        className={className}
        expandHeight={
          Math.ceil(items.length / ITEM_COUNT_ONELINE) * ITEM_HEIGHT
        }
      >
        {items.map((item, idx) => (
          <SelectedItem key={idx}>
            <div>
              <span>{item.name}</span> - <SubId>{item.subId}</SubId>
            </div>
            <DelButton onClick={() => onDelte(item)}>X</DelButton>
          </SelectedItem>
        ))}
      </SelectedListUl>

      {items.length > 5 && (
        <ExtendsButton onClick={extandsToggle}>
          {isExpand ? "Hide" : "See All"}
        </ExtendsButton>
      )}
    </Container>
  );
}

export default SelectedList;

const Container = styled.div`
  position: relative;
  margin-bottom: 40px;
`;

const SelectedListUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 42px;
  overflow: hidden;
  font-weight: bold;
  transition: 0.2s;

  &.expand {
    height: ${(props) => props.expandHeight}px;
  }

  &.empty {
    height: 0px;
  }
`;

const ExtendsButton = styled.button`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -34px;
  padding: 8px;
  border-radius: 12px;
  background: rgba(225, 225, 225, 0.5);
  color: #888;
  font-weight: bold;
`;

const SelectedItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: calc(100% / ${ITEM_COUNT_ONELINE} - 12px);
  padding: 6px 8px;
  margin: 6px;
  border-radius: 5px;
  background: #f2f2f2;
`;

const SubId = styled.span`
  color: ${COLOR.MAIN};
`;

const DelButton = styled.button`
  padding: 0 5px;
  border-radius: 5px;
  margin-left: 16px;
  color: #ee5555;
  font-weight: bold;
  transition: 0.1s;

  &:active {
    box-shadow: 0px 0px 4px 0 rgba(150, 150, 150, 0.2);
    transform: scale(0.96);
  }
`;
