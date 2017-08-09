import request from 'superagent';

//запрос настроек таблиц (всех)
export const getSetting = () => {

    return new Promise ((resolve, reject) => {
        request
            .get(`/setting`)
            .end((err,res) => {
                if (err) reject(err)
                resolve(res.text)
            })
    })
};

//запрос итого таблицы по name
export const getAmount = (name) => {

    return new Promise((resolve, reject) => {
        request
            .get(`/amount/${name}`)
            . end((err,res) => {
                if(err) reject(err);
                resolve(res.text)
            })
    })
};

//запрос body таблицы по name
export const getTable = (name) => {

    return new Promise((resolve, reject) => {
        request
            .get(`/table/${name}`)
            . end((err,res) => {
                if(err) reject(err);
                resolve(res.text)
            })
    })
};
