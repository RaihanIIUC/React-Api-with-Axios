import { ActionType } from "../ActionType";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.UPDATE_CART_LIST:
    return { ...state, cart: action.payload };
    default:
         return state;
  }
};

export default cartReducer;
