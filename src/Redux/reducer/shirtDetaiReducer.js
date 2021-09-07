import { ActionType } from "../ActionType";

const initialState = {
  currentShirt: null,
};

const ShirtDetailReducer = (state = initialState, action) => {
   switch (action.type) {
    case ActionType.UPDATE_CURRENT_SHIRT:
          return { ...state, currentShirt: action.payload };
    default:
      return state;
  }
};

export default ShirtDetailReducer;
