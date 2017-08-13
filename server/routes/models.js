const db = require('../mydatabase/index.js');

//запрос таблицы по name
exports.getBody = (name) => {
    return new Promise((resolve, reject) => {

        switch (name) {

            case 'sale':
            case 'outtrans': //все 3 таблицы используют один код:
            case 'intrans':
                // поля |id(AutoInc) |num(порядковый номер, генерируется) |name |price |vol |сумма(вычисляемое)
                db.get().query('set @row = 0;' +
                    'SELECT id, (@row := @row + 1) AS num, name, price, vol, price*vol AS summa FROM ?? WHERE 1',
                    name,
                    (err, answer) => {
                        if(err) reject(err);
                        resolve(answer[1]); //из-за 2 операторов к sql, нужный ответ в массиве[1]
                });
                break;

            case 'begin':
            case 'end':
                // поля= id(AutoInc) |nominal |ru-только для расчетов |vol |сумма(вычисляемое)
                db.get().query('SELECT id, nominal, vol, vol*ru AS result FROM ?? WHERE 1',
                    name,
                    (err, answer) => {
                        if(err) reject(err);
                        resolve(answer);
                });
                break;

            default:
                reject('CASE:ERROR: Не найдена таблица')
        }
    })
};

//запрос настроек таблицы по name
exports.getSetting = (name) => {

    return new Promise((resolve, reject) => {

        db.get().query('SELECT name, profil, type, head, caption FROM setting WHERE name=?', name,
            (err, answer) => {
                if(err) reject(err);
                resolve(answer);
        })
    })
};

//запрос итого таблицы по name
exports.getAmount = (name) => {
    return new Promise((resolve, reject) => {
        switch (name) {
            case 'sale': //подсчет для таблиц
            case 'outtrans':
            case 'intrans':
                db.get().query('SELECT SUM(price*vol) AS amount FROM ?? WHERE 1', name,
                    (err, answer) => {
                        if (err) reject(err);
                        resolve(answer);
                });
                break;
            case 'begin': //подсчет для таблиц
            case 'end':
                db.get().query('SELECT SUM(vol*ru) AS amount FROM ?? WHERE 1', name,
                    (err, answer) => {
                        if(err) reject(err);
                        resolve(answer);
                    });
                break;

            default:
                reject('CASE:ERROR: Не найдена таблица')
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
};

//ф собирает текущую дату для запросов к SQL
// function todayData() {
//     let data = new Date();
//     const year = data.getFullYear();
//     const month = data.getMonth();
//     const day = data.getDate();
//     data = year+'-'+month+'-'+day;
//     return data
// }

