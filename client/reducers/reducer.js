import { MOUSE, KEYBOARD, REQ } from '../consts/index.js';
import { thunkSendData} from "../requests/thunk.js";

let initialState = {
    active: {},
    body: [],
    setting: {},
    amount: 0
};
export const reducer = (state = initialState, action) => {
    let  {active} = state;
    const {row} = state.active;
    const {body} = state;
    // обработка клавиатуры =========================================
    switch (action.type) {

        case KEYBOARD.ENTER:

            active.id = '';
            //row- позиция строки, ...строка из таблицы
            let data = [active.table, row, body[row]]; //подготовили данные
            console.log("enter", data);
            let a = (data) => dispatch(thunkSendData(data)); //инициировали отправку в базу
            return Object.assign({}, state, {active});

        case KEYBOARD.TAB:
            console.log("TAB");
            return state;

        case KEYBOARD.KEY_UP:
            console.log("UP");
            return state;

        case KEYBOARD.VALUE:
            const key = action.value; //текущий нажатый символ
            const keyType = action.keyType; //нажатый тип символа

            const {type} = state.setting; //тип данных в ячейках
            const {cell} = state.active; //активные координаты таблицы
             //тело таблицы
            console.log(key, keyType, type, row, cell)
            //если тип символов для ячейки разрешен => внести изменение
            if (keyType === type[cell]) body[row][cell] = key;

            return Object.assign({}, state, {body});

        // !!внимание: добавить, если заполнится последняя строка, добавить следующую

//  обработка Мышки ====================================================
        case MOUSE.CLICK:
            active = action.active;
            console.log('active ',active);
            const {profil} = state.setting;
            //если ячейку нельзя редактировать => деактивировать id
            if (profil[active.cell] === '0') active.id = '';
            return Object.assign({}, state, {active});

        case MOUSE.NO:
            console.log('state ', state.active)
            return Object.assign({}, state);

// обработка сетевых обновлений ==========================================
        case REQ.BODY:
            return Object.assign({}, state, {body: action.body});

        case REQ.AMOUNT:
            return Object.assign({}, state, {amount: action.amount});

        case REQ.SETTING:
            return Object.assign({}, state, {setting: action.setting});

        case REQ.ERROR:
            return Object.assign({}, state);

        default:
            return state
    }
};