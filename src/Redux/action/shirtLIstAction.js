import axios from "axios";
import { ActionType } from "../ActionType";

export const setShirtList = (shirtList) => {
  return {
    type: ActionType.UPDATE_SHIRT_LIST,
    payload: shirtList,
  };
};


export const requestShirtList  = ( ) => {
    return async (dispatch ,action) => {
    const response = await  axios.get("https://fakestoreapi.com/products");
    dispatch(setShirtList(response.data));
    }
}