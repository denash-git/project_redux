import { MOUSE, KEYBOARD, REQ } from '../consts/index.js';


const initialState1 = {
    active: {},

};

export const reducer1 = (state = initialState1, action) => {

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
            console.log('акт ',active);
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
            const find = setting_table.findIndex(setting_table => setting_table.name === table); //нашли позицию в массиве
            const _profil = setting_table[find].profil; //из массива берем объект, у объекта профиль
            const type = setting_table[find].type[cell];    //так же тип данных в ячейках

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

//редюсер обработки сетевых обновлений
const initialState3 = {
    active: {},
    body: [],
    setting: {}
};
export const reducer3 = (state = initialState3, action) => {

    switch(action.type) {

        case REQ.BODY:
            return Object.assign({}, state, {body: action.body});

        case REQ.SETTING:
            return Object.assign({}, state, {setting: action.setting});

        case REQ.ERROR:
            return Object.assign({}, state);

        default: return state
    }
};