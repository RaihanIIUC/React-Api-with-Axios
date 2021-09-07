import axios from "axios";
import { useHistory } from "react-router-dom";
import { ActionType } from "../ActionType";

export const setCurrrentShirtList = (deleteShirt) => {
  return {
    type: ActionType.DELETE_CURRENT_SHIRT,
    payload: deleteShirt,
  };
};


export const requestShirtDelete = ( id ) => {
  return async( dispatch )=>{
    const response = 
    await 
    axios.delete(`https://fakestoreapi.com/products/${id}`);
     dispatch(setCurrrentShirtList(response.data));
  }
}

