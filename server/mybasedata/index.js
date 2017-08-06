const mysql = require('mysql');

let state = {
    database: null
};

module.exports = {
    connect: (done) => {

        if(state.database) return done();

        let connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'admin',
            database: 'mybasedata'
        });

        state.database = connection;

        done();
    },
    get: () => (state.database)
}