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

//прикрутить к авторизации! при первом логировании продавца в текущий день (открытие смены)
//создать набор необходимых "нулевых" данных в нужных таблицах
exports.openDay = () => {
    let data = new Date(); //текущая дата
    console.log(data);
    //создание пустой таблицы begin
    let value = [
        {nominal: '5000 р.', ru: 5000, vol: 0, data: data},
        {nominal: '1000 р.', ru: 1000, vol: 0, data: data},
        {nominal: '500 р.', ru: 500, vol: 0, data: data},
        {nominal: '100 р.', ru: 100, vol: 0, data: data},
        {nominal: '50 р.', ru: 50, vol: 0, data: data},
        {nominal: 'мелочь', ru: 1, vol: 0, data: data}
    ];
    value.map(item => {
        db.get().query('INSERT INTO begin SET ?', item,
            (err, answer) => {
                if (err) console.log(err);
                console.log(answer);
            })
    });
}

//ф собирает текущую дату для запросов к SQL
// function todayData() {
//     let data = new Date();
//     const year = data.getFullYear();
//     const month = data.getMonth();
//     const day = data.getDate();
//     data = year+'-'+month+'-'+day;
//     return data
// }

