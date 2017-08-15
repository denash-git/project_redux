import { getBody, getSetting, getAmount, sendData } from "./index.js";

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

export const thunkGetAmount = (name) => {
    return (
        (dispatch) => {
            getAmount(dispatch, name);
        }
    )
};

//отправка запроса на изменение
export const thunkSendData = (data) => {
    return (
        (dispatch) => {
            sendData(dispatch, data);
        }
    )
};
