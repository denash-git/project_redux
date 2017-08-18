const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	router = express.Router(),
    Models = require('./models.js');

// запрос итого таблицы по name
router.get('/amount/:name', (req, res) => {

	const name = req.params.name;
    Models.getAmount(name).then(answer =>{
    	const amount = answer[0];
        res.send(amount);
    })
});

// запрос report отчет
router.get('/report', (req, res) => {

    Models.getReport().then(answer =>{
        const amount = answer[0];
        //res.send(amount);
        console.log(answer);
    })
});

//запрос body таблицы по name
router.get('/body/:name', (req, res) => {
	const name = req.params.name;

    Models.getBody(name).then(table => {
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
        console.log(body)
		res.send(body);
    });
});

//запрос настроек таблиц по name
router.get('/setting/:name', (req, res) => {

    const name = req.params.name;
	Models.getSetting(name).then(setting =>{
		//конвертирование ключей в массивы
        setting[0].head = setting[0].head.split(',');
        setting[0].profil = setting[0].profil.split(',');
        setting[0].type = setting[0].type.split(',');
		res.send(setting);
	})
});

//запрос изменений в таблицу
router.post('/data', (req, res) => {
    const data = req.body;
	const table = data.table; //имя таблицы
	const id = data.id; //id строки для изменения
	let newdata = {};
    //формируем поле и значение для изменения в sql
	switch(table){
		case 'sale':
		case 'intrans':
		case 'outtrans':
			newdata[['#','name', 'price', 'vol'][data.cell]] = data.value;
			break;
		case 'end':
		case 'begin':
			newdata['vol'] = data.value;
			break;
	}
	//внесение изменений,
    //запрос суммы последней строки таблицы, если !=0, добавим новую пустую строку
    Models.sendData(table, newdata, id).then(answer => {
        console.log(answer)
        if (answer[0].sum !== null) {
            Models.addString(table).then(answer => {
                console.log('строка доб')
                let string = {};
                res.send(string)
            })
        } else { //запрос всей строки, после изменений
            Models.getBody(table, {id: id}).then(answer =>{
                let string = answer[0];
                res.send(string)
            });
        }
    })
});

//запись полей Модуль и Инкассация
router.get('/oper', (req,res) => {
    const data = {
        modul: req.query.modul,
        incass: req.query.incass
        };
	console.log(req.query, req.query.modul, req.query.incass)
	Models.oper(data).then(answer => {
	    console.log('vse');
	    res.send(answer)
    })
});

module.exports = router;