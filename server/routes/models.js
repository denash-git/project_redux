const db = require('../mybasedata/index.js');

exports.getTable = () => {
    return new Promise((resolve, reject) => {
        db.get().query('SELECT `id`, `enum`, `name`, `price`, `vol`, `sum` FROM `sale` WHERE 1', (err, rows) => {
            if(err) reject(err)

            //console.log(rows);

            resolve(rows);
        })
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