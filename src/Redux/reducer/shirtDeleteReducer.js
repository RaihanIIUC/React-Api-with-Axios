import { ActionType } from "../ActionType";

const initialState = {
  currentShirt: null,
};

const ShirtDeleteReducer = (state = initialState, action) => {
   switch (action.type) {
    case ActionType.DELETE_CURRENT_SHIRT:
          return { ...state, currentShirt: null };
    default:
      return state;
  }
};

export default ShirtDeleteReducer;
