// Libraries
import React, { useReducer } from "react";
import uuid from "uuid";

import WishListContext from "./context";
import WishListReducer from "./reducer";
import { ADD_LIST_ITEM, DELETE_LIST_ITEM } from "../types";

const WishListState = props => {
  const initialState = {
    items: [
      {
        id: 1,
        name: "iPad Pro",
        isBought: false,
        link: "https://amazon.com"
      },
      {
        id: 2,
        name: "Waking Up book",
        isBought: true,
        link: "https://godreads.com"
      },
      {
        id: 3,
        name: "LG Monitor",
        isBought: false,
        link: "https://lg.com"
      },
      {
        id: 4,
        name: "MIDI player",
        isBought: false,
        link: "https://midiplayersforsale.com"
      },
      {
        id: 5,
        name: "iPhone 12 Pro Max",
        isBought: false,
        link: "https://apple.com"
      }
    ]
  };

  const [state, dispatch] = useReducer(WishListReducer, initialState);

  // Add item
  const addListItem = listItem => {
    listItem.id = uuid.v4();

    dispatch({
      type: ADD_LIST_ITEM,
      payload: listItem
    });
  };

  // Delete item
  const deleteItem = id => {
    dispatch({
      type: DELETE_LIST_ITEM,
      payload: id
    });
  };

  // Set current item
  // Clear current item
  // Update item
  // Filter items
  // Clear filter

  // Returning our provider, which we will be able to use to access our state while wrapping it in our app
  return (
    <WishListContext.Provider
      value={{ items: state.items, addListItem, deleteItem }}
    >
      {props.children}
    </WishListContext.Provider>
  );
};

export default WishListState;
