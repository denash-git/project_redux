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
router.get('/log', (req, res) => {
    let report = {
            result: 0,
            report: ''
    };
    //запрос всех ИТОГО по всем таблицам
    Models.getReport().then(answer => {
        // преобразование многомерного массива в 1 объект
         answer.map((item) => {
             Object.assign(report, item[0]);
         });
        //формирование выводов относитьлно кассы
        report.result = report.begin + report.sale - report.outtrans +
            report.intrans - report.end + report.modul - report.incass;
        if (Math.abs(report.result) === report.result) report.report = 'Балланс + , У Вас недосдача в кассе !';
        else report.report = 'Балланс - , у Вас излишек в кассе, что - то не записано!';
        if (report.result === 0)  report.report = 'Ваш балланс по кассе 0, все отлично!';
        res.send(report);
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
		res.send(body);
    });
});

//запрос настроек таблиц по name
router.get('/setting/:name', (req, res) => {

    const name = req.params.name;
	Models.getSetting(name).then(setting =>{
		//конвертирование текст в массив
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
	//1 внесение изменений,
    //2 запрос суммы последней строки таблицы,
    Models.sendData(table, newdata, id).then(lastSum => {

        //отмена добавления строки
        if (table === 'begin' || table ===  'end') lastSum[0].sum = null;
        let result = lastSum[0].sum !== null;

        //запрос всей строки, после изменений
        Models.getBody(table, {id: id}).then(strFull =>{
            let string = [strFull[0], lastSum[0]];
            res.send(string)
        });

        //если сумма последней строки не пустая, добавим новую пустую строку
        if (result) {
            Models.addString(table).then(add => {

            })
        }
    })
});

//запись полей Модуль и Инкассация
router.get('/oper', (req,res) => {
    const data = {
        modul: req.query.modul,
        incass: req.query.incass
        };
	Models.oper(data).then(answer => {
	    res.send(answer)
    })
});

module.exports = router;