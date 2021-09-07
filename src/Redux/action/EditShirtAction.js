import axios from "axios";
import { ActionType } from "../ActionType";

export const setCurrrentShirtList = (currentShirt) => {
  return {
    type: ActionType.UPDATE_CURRENT_SHIRT,
    payload: currentShirt,
  };
};


export const requestEditShirt = (ShirtDetails , id ) => {
  return async (dispatch, action) => {
    const response = await axios
      .put(`https://fakestoreapi.com/products/${id}`, {
        title: ShirtDetails.title,
        description: ShirtDetails.description,
        price: ShirtDetails.price,
        category: ShirtDetails.category,
        image: ShirtDetails.image,
      })
      .then((response) => {
        console.log(response.data, "===responsed");
      })
      .catch((error) => {
        console.log(error, "===errors ");
      });
    dispatch(setCurrrentShirtList(response.data));
  };
};

