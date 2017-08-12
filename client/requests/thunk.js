import { getBody, getSetting } from "./index.js";

export const thunkGetBody = (name) => {
    return (
        (dispatch) => {
            getBody(dispatch, name);
        }
    )
};

export const thunkGetSetting = (name) => {
    return (
        (dispatch) => {
            getSetting(dispatch, name);
        }
    )
};