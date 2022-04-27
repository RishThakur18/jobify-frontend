export const SIDEBAR_SHOW = "SIDEBAR_SHOW";
export const SIDEBAR_HIDE = "SIDEBAR_HIDE";

export function sideBarShow(payload) {
    return {
        type: SIDEBAR_SHOW
    }
}

export function sideBarHide(payload) {
    return {
        type: SIDEBAR_HIDE
    }
}

