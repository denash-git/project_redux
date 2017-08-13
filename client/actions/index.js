import { MOUSE, KEYBOARD, REQ } from '../consts/index.js';

//экшен MOUSE ===================================================================
export const handleClick = (e) => {
    const vol = e.target;  //ловим событие
    //определяем координаты клика
    const id = vol.id;  //id  ячейки
    const table = vol.parentNode.parentNode.parentNode.id;  //имя таблицы
    const row = vol.parentNode.rowIndex; //строка
    const cell = vol.cellIndex; //ячека
    const active = {
        id: id,
        row: row - 1,
        cell: cell,
        table: table
    };
    if (typeof row !=='undefined') return {type: MOUSE.CLICK, active};
};

// экшен KEYBOARD ==============================================================
export const handleChange = (e) => {
    const key = e.keyCode;
    const value = e.target.value;
    console.log(e);

    switch (+key) {
        case 13:
            return {type: KEYBOARD.ENTER};

        case 9:
            return {type: KEYBOARD.TAB};

        case 38:
            return {type: KEYBOARD.KEY_UP};

        default: return {
            type: KEYBOARD.VALUE,
            value: value,
            keyType: ((key > 47 && key < 58) || (key > 95 && key < 106)) ? "number" : "string"
        }
    }
};

// экшен REGUEST ===========================================================
export const actionReq =  {
        SettingOK: (setting) => ({type: REQ.SETTING, setting}),
        BodyOK: (body) => ({type: REQ.BODY, body}),
        AmountOK: (amount) => ({type: REQ.AMOUNT, amount}),
        error: () => ({type: REG.BAD})

};