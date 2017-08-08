const db = require('../mybasedata/index.js');

//запрос таблицы
exports.getTable = () => {
    return new Promise((resolve, reject) => {
        db.get().query('SELECT enum, name, price, vol, price*vol AS summa FROM sale WHERE 1', (err, answer) => {
            if(err) reject(err);
            resolve(answer);
        })
    })
};

//запрос настроек таблицы
exports.getSetting = () => {
    return new Promise((resolve, reject) => {
        db.get().query('SELECT `name`, `profil`, `type`, `head` FROM `setting` WHERE 1', (err, answer) => {
            if(err) reject(err);
            resolve(answer);
        })
    })
};

//запрос итого таблицы
exports.getAmount = (name) => {
    return new Promise((resolve, reject) => {
        switch (name) {
            case 'sale':
                db.get().query('SELECT SUM(price*vol) AS amount FROM sale WHERE 1', (err, answer) => {
                    if (err) reject(err);
                    resolve(answer);
                });
                break
        }
    })
};

exports.newUser = (user) => {
    console.log(user, 'check');
    return new Promise((resolve, reject) => {
        db.get().query(
            "insert into users set ?",
            user,
            (err, rows) => {
                if(err) reject(err);

                console.log('rows', rows);

                resolve({staus: 'ok'});
            })
    })
};
//
// exports.getTable = () => {
//     return new Promise((resolve, reject) => {
//         db.get().query('SELECT `enum`, `name`, `price`, `vol`, `sum` FROM `sale` WHERE 1', (err, answer) => {
//             if(err) reject(err);
//             resolve(answer);
//         })
//     })
// };