import {  MOUSE, KEYBOARD } from './../consts/index.js';

export const act = {
    click: (e) => ({type: MOUSE.CLICK, e}),

    change: (e) => {
        const key = e.keyCode;
        const value = e.target;
        console.log(key);
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
    }
};
