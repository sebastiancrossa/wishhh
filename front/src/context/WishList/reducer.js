import {
  GET_ITEMS,
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  ITEM_ERROR
} from "../types";

const WishListReducer = (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false
      };

    case ADD_LIST_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false
      };

    case DELETE_LIST_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload),
        loading: false
      };

    case ITEM_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default WishListReducer;
