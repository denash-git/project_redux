const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	router = express.Router(),
    Models = require('./models.js');

// запрос итого таблицы по name
router.get('/amount/:name', (req, res) => {

	let name = req.params.name;
    Models.getAmount(name).then(answer =>{
    	let amount = answer[0];
        res.send(amount);
    })
});

//запрос body таблицы по name
router.get('/body/:name', (req, res) => {

	let name = req.params.name;
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

    let name = req.params.name;
	Models.getSetting(name).then(setting =>{

        setting[0].head = setting[0].head.split(',');
        setting[0].profil = setting[0].profil.split(',');
        setting[0].type = setting[0].type.split(',');
		res.send(setting);

	})
});

//временная функ для тестов
router.get('/test', (req,res) => {

	Models.openDay();

});

module.exports = router;