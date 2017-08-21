import request from 'superagent';
import { actionReq } from '../actions/index.js';

//запрос настроек таблицы по name
export const getSetting = (dispatch, name) => {

        request
            .get(`/setting/${name}`)
            .end((err,res) => {
                if (err) dispatch(actionReq.error(err));
                //приходит массив из 1 объекта, нам объект и нужен
                dispatch(actionReq.SettingOK(res.body[0]));
            })
};

//запрос итого таблицы по name
export const getAmount = (dispatch, name) => {

        request
            .get(`/amount/${name}`)
            .end((err,res) => {
                if(err) dispatch(actionReq.error(err));
                dispatch(actionReq.AmountOK(res.body.amount));
            })
};

//запрос body таблицы по name
export const getBody = (dispatch, name) => {
        request
            .get(`/body/${name}`)
            .end((err,res) => {
                if (err) dispatch(actionReq.error(err));
                dispatch(actionReq.BodyOK(res.body))
            })
};

//отправка изменений на сервер
export const sendData = (dispatch, data) => {
    request
        .post('/data')
        .send(data)
        .end((err, res) => {
            if (err) dispatch(actionReq.error(err));
            if (res.body[1].sum !== null) dispatch(actionReq.NewStr());
            else dispatch(actionReq.SendOK(res.body[0]))
        })
};

//запрос отчета
export const getReport = (dispatch) => {
    request
        .get('/log')
        .end((err,res) => {
            console.log('err', err)
            if (err) dispatch(actionReq.error(err));
            console.log('ответ ', res.body)
            dispatch(actionReq.ReportOK(res.body))
        })
};