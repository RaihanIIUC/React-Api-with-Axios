import { combineReducers } from "redux";

import cartReducer from "./cartReducer";
import ShirtDeleteReducer from "./shirtDeleteReducer";
import ShirtDetailReducer from "./shirtDetaiReducer";
import shirtListReducer from "./shirtListReducer";



const mainReducer = combineReducers({
  listStore: shirtListReducer,
  detailStore: ShirtDetailReducer,
  cartStore: cartReducer,
  deleteStore : ShirtDeleteReducer
});


export default mainReducer;