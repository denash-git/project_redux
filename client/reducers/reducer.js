import { MOVE } from '../consts/index.js';

const initialState = {
    setting_table: [
        {
            name: "rem",
            profil: [ 1, 1, 1, 0]
        },
        {
            name: "opt",
            profil: [0, 1, 1]
        },
        {
            name: "sale",
            profil: [ 0, 1, 1, 1, 0],
            type: ["number", "string", "number", "number", "number"]
        }

    ],

    table_sale: [
        ['№', 'Наименование', 'Цена', 'Кол-во', 'Сумма'],
        [1, 'Батарейка АА', 35, 2, 70],
        [2, 'Батарейка А2', 31, 7, 217],
        [3, 'Батарейка А3', 30, 3, 90],
        [4, 'Батарейка А5', 36, 1, 36],
        [5, 'Батарейка А7', 38, 5, 190],
        [6, 'Батарейка А7', 38, 5, 190],
        [7, 'Батарейка А7', 38, 5, 190],
        [8, 'Батарейка А7', 38, 5, 190],
        [9, 'Батарейка А7', 38, 5, 190],
        [10, 'Батарейка А7', 38, 5, 190],
        [11, 'Батарейка А7', 38, 5, 190],
        [12, 'Батарейка А7', 38, 5, 190],
        [13, 'Батарейка А7', 38, 5, 190],
        [14, 'Батарейка А7', 38, 5, 190],
        [15, 'Батарейка А7', 38, 5, 190],
        [16, '',null, null, null]
    ],
    active: {}
};

export const Reducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE:

            const type = ["number", "string", "number", "number", "number"]; //тип полей таблицы,
            //инф будет запрашиваться с сервера
            let {active} = state; //активная ячейка
            let {table_sale} = state; //активная таблица(будем запрашивать с сервера)

            let key = e.target.value; //слушаем клавиатуру



            let keyType=""; //тип нажатой кнопки
            if ( !isNaN(key) ) {keyType="number"} else keyType="string";

            //проверка соответствует ли типу ячейки
            if (keyType === type[active.cell]) {
                table_sale[active.row][active.cell] = key; //изменение инф в тек ячейке
                return Odject.assign({}, state, {table_sale: table_sale});
            } else return state;

        // !!внимание: добавить, если заполнится последняя строка, добавить следующую


        case CLICK:

            let {setting_table}=state; //настройки таблицы

            const id = e.target.id;//id активной ячейки
            const table = e.target.parentNode.parentNode.parentNode.id; //имя таблицы
            const row = e.target.parentNode.rowIndex;	//строка
            const cell = e.target.cellIndex;	//ячека

            console.log(id, table, row, cell);
            //определить настройки ячеек по имени таблицы, потом будет это на сервере
            const find = setting_table.findIndex(setting_table => setting_table.name === table);
            console.log(find);
            const _profil = setting_table[find].profil;
            console.log(_profil);

            //обобщенный объект с данными
             active = {
                id: id,
                row: row,
                cell: cell,
                table: table
            };

            //если ячейку можно редактировать =>сделать активной
            if (_profil[cell] === 1) {
                return Object.assign({}, state, {active});
            } else {
                return state
            }


        default: return state;
    }
};