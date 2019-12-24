import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../types";

const WishListReducer = (state, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case DELETE_LIST_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export default WishListReducer;
