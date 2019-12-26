// Libraries
import React, { useReducer } from "react";
import axios from "axios";

import WishListContext from "./context";
import WishListReducer from "./reducer";
import {
  GET_ITEMS,
  ADD_LIST_ITEM,
  DELETE_LIST_ITEM,
  ITEM_ERROR
} from "../types";

const { backendUrl } = require("../../utils/config/configVariables");

const WishListState = props => {
  const initialState = {
    items: [],
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(WishListReducer, initialState);

  // Get Items
  const getItems = async () => {
    try {
      const res = await axios.get(`${backendUrl}/api/wishes`);

      dispatch({
        type: GET_ITEMS,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ITEM_ERROR,
        payload: error.response.message
      });
    }
  };

  // Add item
  const addListItem = async listItem => {
    const config = {
      headers: { "Content-Type": "application/json" }
    };

    try {
      const res = await axios.post(
        `${backendUrl}/api/wishes`,
        listItem,
        config
      );

      dispatch({
        type: ADD_LIST_ITEM,
        payload: res.data
      });
    } catch (error) {
      dispatch({
        type: ITEM_ERROR,
        payload: error.response.message
      });
    }
  };

  // Delete item
  const deleteItem = id => {
    dispatch({
      type: DELETE_LIST_ITEM,
      payload: id
    });
  };

  // Returning our provider, which we will be able to use to access our state while wrapping it in our app
  return (
    <WishListContext.Provider
      value={{
        items: state.items,
        error: state.error,
        loading: state.loading,
        getItems,
        addListItem,
        deleteItem
      }}
    >
      {props.children}
    </WishListContext.Provider>
  );
};

export default WishListState;
