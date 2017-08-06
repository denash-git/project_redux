const express = require('express'),
	path = require('path'),
	fs = require('fs'),
	router = express.Router(),
    Models = require('./models.js');
	  //fd = path.join(__dirname, '../mybasedata/db_file.js');
//let userList = readData();


router.get('/table', (req, res) => {
    Models.getTable().then(table => {
        console.log(table);
    });
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
router.get('/list', (req, res) => {
	res.send(userList);
});


module.exports = router;