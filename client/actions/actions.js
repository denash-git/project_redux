import React from 'react';

//определение активной ячейки
	export function click (e) {
		
		let {setting_table}=this.state; //настройки таблицы

		const id = e.target.id;//id активной ячейки
		const table = e.target.parentNode.parentNode.parentNode.id; //имя таблицы
		const row = e.target.parentNode.rowIndex;	//строка
		const cell = e.target.cellIndex;	//ячека
		
		console.log(id, table, row, cell)
		//определить настройки ячеек по имени таблицы, потом будет это на сервере
		const find = setting_table.findIndex(setting_table => setting_table.name == table);
		console.log(find)
		const _profil = setting_table[find].profil;
		console.log(_profil)
		
		//обобщенный объект с данными
			const active = {
				id: id,
				row: row,
				cell: cell,
				table: table
				};

		//если ячейку можно редактировать =>сделать активной
		if (_profil[cell] == 1) {
				this.setState({active});
		};
	};

//логика работы в активной ячейке
	export function change (e) {

		console.log(e.keyCode)

		const type = ["number", "string", "number", "number", "number"]; //тип полей таблицы,
																		//инф будет запрашиваться с сервера
		const {active} = this.state; //активная ячейка
		let {table_sale} = this.state; //активная таблица(будем запрашивать с сервера)

		let key = e.target.value; //слушаем клавиатуру

		

		let keyType=""; //тип нажатой кнопки
		if ( !isNaN(key) ) {keyType="number"} else keyType="string";
	
		//проверка соответствует ли типу ячейки
		if (keyType == type[active.cell]) {
			table_sale[active.row][active.cell] = key; //изменение инф в тек ячейке
		this.setState({table_sale});
		};

		// !!внимание: добавить, если заполниться последняя строка, добавить следующую
		
	}
