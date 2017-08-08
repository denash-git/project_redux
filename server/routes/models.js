const db = require('../mybasedata/index.js');

//запрос таблицы по name
exports.getTable = (name) => {
    return new Promise((resolve, reject) => {
        switch (name) {

            case 'sale':
                db.get().query('SELECT enum, name, price, vol, price*vol AS summa FROM sale WHERE 1', (err, answer) => {
                    if(err) reject(err);
                    resolve(answer);
                });
                break;
            case 'begin':
                db.get().query('SELECT nominal, vol, vol*ru AS result FROM begin WHERE 1',
                    (err, answer) => {
                    if(err) reject(err);
                    resolve(answer);
                });
                break;
        }

    })
};

//запрос настроек таблиц (всех)
exports.getSetting = () => {
    return new Promise((resolve, reject) => {
        db.get().query('SELECT `name`, `profil`, `type`, `head` FROM `setting` WHERE 1', (err, answer) => {
            if(err) reject(err);
            resolve(answer);
        })
    })
};

//запрос итого таблицы по name
exports.getAmount = (name) => {
    return new Promise((resolve, reject) => {
        switch (name) {
            case 'sale': //подсчет для таблицы sale
                db.get().query('SELECT SUM(price*vol) AS amount FROM sale WHERE 1', (err, answer) => {
                    if (err) reject(err);
                    resolve(answer);
                });
                break;
            case 'begin': //подсчет для таблицы begin
                db.get().query('SELECT SUM(vol*ru) AS amount FROM begin WHERE 1',
                    (err, answer) => {
                        if(err) reject(err);
                        resolve(answer);
                    });
                break;
        }
    })
};
