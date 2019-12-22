// Libraries
import {
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_ITEM,
  FILTER_ITEMS,
  CLEAR_FILTER
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    default:
      return state;
  }
};
