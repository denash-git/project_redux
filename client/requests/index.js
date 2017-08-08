import request from 'superagent';

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
