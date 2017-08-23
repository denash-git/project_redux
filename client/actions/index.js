import { MOUSE, KEYBOARD, REQ } from '../consts/index.js';

//экшен MOUSE ===================================================================
export const handleClick = (e) => {
    const vol = e.target;  //ловим событие
    //определяем координаты клика
    const id = vol.id;  //id  ячейки
    const table = vol.parentNode.parentNode.parentNode.id;  //имя таблицы
    const row = vol.parentNode.rowIndex; //строка
    const cell = vol.cellIndex; //ячека
    const active = { //формируется объект с инфо о нажатой ячейки
        id: id,
        row: row - 1,
        cell: cell + 1,
        table: table,
        type: ''
    };
    //если нажата повторно, то не вносить изменнения
    if (id !== '') return {type: MOUSE.CLICK, active};
    else  return {type: MOUSE.NO}
};

// экшен KEYBOARD ==============================================================
export const handleChange = (e) => {
    const key = e.keyCode;
    const value = e.target.value;
    switch (+key) {
        case 13:

            //$('#11').trigger('click');
           console.log(e.target.parentNode.id)
            return {type: KEYBOARD.ENTER};

        case 9:
            e.stopPropagation();
            return {type: KEYBOARD.TAB};

        case 38:
            return {type: KEYBOARD.KEY_UP};

        default: return {
            type: KEYBOARD.VALUE,
            value: value
        }
    }
};

// экшен REGUEST ===========================================================
export const actionReq =  {
        ReportOK: (report) => ({type: REQ.REPORT, report}),
        NewStr: () => ({type: REQ.NEW}),
        SendOK: (obj) => ({type: REQ.SEND, obj}),
        SettingOK: (setting) => ({type: REQ.SETTING, setting}),
        BodyOK: (body) => ({type: REQ.BODY, body}),
        AmountOK: (amount) => ({type: REQ.AMOUNT, amount}),
        error: (err) => ({type: REG.BAD, err})
};