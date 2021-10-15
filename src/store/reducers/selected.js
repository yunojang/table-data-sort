import types from "store/actions/types";

const INITIAL_STATE = {
  items: [],
};

function selected(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.SELECTED_ADD:
      const newItem = action.item;

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case types.SELECTED_REMOVE:
      const { id, subId } = action.item;

      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== id || item.subId !== subId
        ),
      };
    default:
      return state;
  }
}

export default selected;
