import * as sideBarActions from "./SideBarActions";

const INITIAL_STATE = {
    sideBarVisible: false
}

export default function sideBarReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case sideBarActions.SIDEBAR_SHOW:
            return {
                ...state,
                sideBarVisible: true,
            }

        case sideBarActions.SIDEBAR_HIDE:
            return {
                ...state,
                sideBarVisible: false,
            }

        default: // need this for default case
            return state
    }
}