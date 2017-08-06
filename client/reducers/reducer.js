import { MOUSE, KEYBOARD } from '../consts/index.js';


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

        case KEYBOARD.ENTER:
            console.log("enter");
            return state;

        case KEYBOARD.TAB:
            console.log("TAB");
            return state;

        case KEYBOARD.KEY_UP:
            console.log("UP");
            return state;

        case KEYBOARD.VALUE:
            const key = action.value.value; //текущий нажатый символ
            let {active} = state.active; //данные активной ячейки
            let {table_sale} = state;
            console.log(active);
            table_sale[active.row][active.cell] = key;
            return Object.assign({}, state, {table_sale});
            //     console.log(key);
            // //проверка соответствует ли типу ячейки
            // if (action.keyType === active.type) {
            //     console.log(action.keyType, "тип");
            //     table_sale[active.row][active.cell] = key; //изменение инф в тек ячейке
            //     return Object.assign({}, state, {table_sale});
            // } else return state;

        // !!внимание: добавить, если заполнится последняя строка, добавить следующую


        case MOUSE.CLICK:
            let vol = action.e.target;  //ловим событие
            let {setting_table}=state; //настройки таблицы

            //определяем координаты клика
            const id = vol.id;  //id  ячейки
            const table = vol.parentNode.parentNode.parentNode.id;  //имя таблицы
            const row = vol.parentNode.rowIndex; //строка
            const cell = vol.cellIndex; //ячека
            console.log(table)
            //определить настройки ячеек по имени таблицы
            const find = setting_table.findIndex(setting_table => setting_table.name === table); //нашли позицию
            const _profil = setting_table[find].profil;
            const type = setting_table[find].type[cell];

            //если ячейку можно редактировать =>сделать активной
            if (_profil[cell] === 1) {
                console.log("сработало")
                //объект с инфо активной ячейки
                active = {
                    id: id,
                    row: row,
                    cell: cell,
                    table: table,
                    type: type
                };
                return Object.assign({}, state, {active});
            } else {
                return state
            }


        default: return state;
    }
};
