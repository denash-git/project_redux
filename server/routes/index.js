const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	router = express.Router(),
    Models = require('./models.js');
//fd = path.join(__dirname, '../mybasedata/db_file.js');
//let userList = readData();

// запрос итого таблицы по name
router.get('/amount/:name', (req, res) => {

	let name = req.params.name;
    Models.getAmount(name).then(answer =>{
    	let amount = answer[0];
        res.send(amount);
    })
});

//запрос на body таблицы, указанной в name
router.get('/table/:name', (req, res) => {

	let name = req.params.name;
    Models.getTable(name).then(table => {
        //преобразование из массива объектов, в двумерный массив.
    	let body = [],
        	bodyTemp = [],
			n = '';
        table.map(item => {		//проход по объектам массива
        	bodyTemp = [];

        	for (n in item) {	//проход по ключам объекта, достаем значения
        		bodyTemp.push(item[n]);
			}
			body.push(bodyTemp);
		});
		res.send(body);
		console.log(body);
    });
});

//запрос настроек таблиц
router.get('/setting', (req, res) => {

	Models.getSetting().then(setting =>{
		console.log(setting);
	})
});



//
// function readData() {
// 	let file = fs.readFileSync(fd, 'utf8');
// 	//let data = JSON.parse(file);  пока без джейсона
// 	let data = file;
// 	return data;
// }
//
// function writeData(userList) {
// 	//let data = JSON.stringify(userList); пока без джейсона
// 	let data = userList;
// 	fs.writeFileSync(fd, data);
// }
 
// получение всех юзеров
// router.get('/list', (req, res) => {
// 	res.send(userList);
// });

module.exports = router;