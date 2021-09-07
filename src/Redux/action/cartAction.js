import { ActionType } from "../ActionType";

export const setCart = (cart) => {
  return {
    type: ActionType.UPDATE_CART_LIST,
    payload: cart,
  };
};
