import axios from "axios";
import { ActionType } from "../ActionType";

export const setCurrrentShirtList = (currentShirt) => {
  return {
    type: ActionType.UPDATE_CURRENT_SHIRT,
    payload: currentShirt,
  };

};


export const requestShirtDetail = ( id ) => {
  return async( dispatch )=>{
    const response = 
    await axios.get(`https://fakestoreapi.com/products/${id}`);
    dispatch(setCurrrentShirtList(response.data));
  }
}

