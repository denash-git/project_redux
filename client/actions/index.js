import { MOVE } from './../consts/index.js';

export const act = {
    click: (e) => ({type: CLICK, e}),
    change: (e) => ({type: CHANGE, e})
};