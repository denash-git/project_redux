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
    let {profil} = state.setting;
    let {type} = state.setting;
    let {cell} = state.active; //активные координаты таблицы
    // обработка клавиатуры =========================================
    switch (action.type) {

        case KEYBOARD.ENTER:

            if (profil[cell+1] === '0') {cell = 1; row = row + 1}
            //if (body.length <= row) {row = active.row};

            const type_ = type[cell+1];
            active = {
                id: row +''+ cell,
                row: row,
                cell: cell+1,
                table: active.table,
                type: type_};
            console.log('enter', active)
            return Object.assign({}, state, {active});

        case KEYBOARD.VALUE:
            const key = action.value; //текущий нажатый символ
            //тело таблицы получили в шапке
            body[row][cell] = key; // внесли нажатый символ в ячекйку
            return Object.assign({}, state, {body});

//  обработка Мышки ====================================================
        case MOUSE.CLICK:
            active = action.active;
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
            //location.reload();
            const data = action.data;
            //форм. новой следующей строки
            const str = [data.id+1, body.length+1, null, null, null, null];
            body.push(str);
            return Object.assign({}, state, {body});

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