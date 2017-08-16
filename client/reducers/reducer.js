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
            // let data = [active.table, row, body[row]]; //подготовили данные
            // console.log("enter", data);
            // thunkSendData(data); //инициировали отправку в базу
            return Object.assign({}, state, {active});

        case KEYBOARD.TAB:
            console.log("TAB");
            return state;

        case KEYBOARD.KEY_UP:

            console.log("UP");
            return Object.assign({}, state, {active});

        case KEYBOARD.VALUE:
            const key = action.value; //текущий нажатый символ
            const {cell} = state.active; //активные координаты таблицы
            //тело таблицы получили в шапке
            body[row][cell] = key; // внесли нажатый символ в ячекйку
            return Object.assign({}, state, {body});

        // !!внимание: добавить, если заполнится последняя строка, добавить следующую

//  обработка Мышки ====================================================
        case MOUSE.CLICK:
            active = action.active;
            const {profil} = state.setting;
            const {type} = state.setting;
            //определяем тип у активной ячейки для ввода(text/number)
            active.type = type[active.cell];
            //если ячейку нельзя редактировать => деактивировать id
            if (profil[active.cell] === '0') active.id = '';
            return Object.assign({}, state, {active});

        case MOUSE.NO:
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