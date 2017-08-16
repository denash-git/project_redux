import { getBody, getSetting, getAmount, sendData } from "./index.js";

//запрос тела таблицы
export const thunkGetBody = (name) => {
    return (
        (dispatch) => {
            getBody(dispatch, name);
        }
    )
};

//запрос настроек таблицы
export const thunkGetSetting = (name) => {
    return (
        (dispatch) => {
            getSetting(dispatch, name);
        }
    )
};

//запрос суммы ИТОГО таблицы
export const thunkGetAmount = (name) => {
    return (
        (dispatch) => {
            getAmount(dispatch, name);
        }
    )
};

//отправка запроса на изменение
export const thunkSendData = (e, active) => {
    console.log('thunk', e.target.value, active.cell)
    return (
        (dispatch) => {
            sendData(dispatch, data);
        }
    )
};
