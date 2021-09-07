import { ActionType } from "../ActionType";

const initialState  = {
    shirtList : [],
}

const shirtListReducer = ( state = initialState, action ) =>{
     switch (action.type) {
       case ActionType.UPDATE_SHIRT_LIST:
         return { ...state, shirtList: action.payload };
       default:
         return state;
     }
}

export default shirtListReducer;