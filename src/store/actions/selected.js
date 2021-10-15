import types from "./types";

export const addItem = (item) => {
  return {
    type: types.SELECTED_ADD,
    item,
  };
};

export const removeItem = (item) => {
  return {
    type: types.SELECTED_REMOVE,
    item,
  };
};
