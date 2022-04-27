import { combineReducers } from "redux";
import authReducer from "./auth/AuthReducer";
import sideBarReducer from "./sidebar/SideBarReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    sideBar: sideBarReducer
});

export default rootReducer;
