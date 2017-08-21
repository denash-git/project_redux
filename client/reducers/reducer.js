import { MOUSE, KEYBOARD, REQ } from '../consts/index.js';

let initialState = {
    active: {},
    body: [],
    setting: {},
    amount: 0,
    report: {}
};

export const reducer = (state = initialState, action) => {
    let  {active} = state;
    let {row} = state.active;
    let {body} = state;
    // обработка клавиатуры =========================================
    switch (action.type) {

        case KEYBOARD.ENTER:

            //active.id = '';
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

        case REQ.REPORT:
            return Object.assign({}, state, {report: action.report});

        case REQ.ERROR:
            console.log(action.err);
            return Object.assign({}, state);

        case REQ.NEW:
            location.reload();
            return Object.assign({}, state);

        case REQ.SEND:

            const obj = action.obj; //объект с новой строкой
            const id = obj.id; // id строки для изменения
            const sum = obj.sum; //сумма новая
            let sum_old = 0; //будет старая сумма для расчета коррекции ИТОГО
            body.map((item, index) => {
            //пробег по таблице , ищем id
                if (item[0] === id) {
                    //нашли, забрали старую цену, положили новую
                   sum_old = body[index][item.length-1];
                   body[index][item.length-1] = sum;
                }
            });
            let {amount} = state;
            amount = amount + sum - sum_old; //коррекция ИТОГО
            return Object.assign({}, state, {amount}, {body});


        default:
            return state
    }
};