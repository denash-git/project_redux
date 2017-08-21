import { getBody, getSetting, getAmount, sendData, getReport } from "./index.js";

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

//запрос страницы отчета
export const thunkGetReport = () => {
    return (
        (dispatch) => {
            getReport(dispatch);
        }
    )
};

//отправка запроса на изменение /событие потеря фокуса
export const thunkSendData = (e) => {
    //подготовка данных к отправке на сервер
    const value = e.target.value;
    if (value === '') return false;
    const cell = e.target.parentNode.cellIndex;
    const id = e.target.parentNode.parentNode.id;
    const table = e.target.parentNode.parentNode.parentNode.parentNode.id;
    const data = {
        table: table,
        value: value,
        id: +id,
        cell: cell
    };

    return (
        (dispatch) => {
            sendData(dispatch, data);
        }
    )
};
