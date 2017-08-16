import React from 'react';

export const FormEnd = (e) => {

    return (
        <form action='/formend' metod='get'>
            <fieldset>
            <legend>Внесите данные :</legend>
            <label>Платежи по модулю : </label>
            <input type="number" name="modul" min="0"  placeholder="*****" required />
            </fieldset>
            <fieldset>
            <label>Инкассация : </label>
            <input type="number" name="incass" min="0"  placeholder="**" required />
            </fieldset>
            <fieldset>
            <input type="submit" value="Сохранить" />
            </fieldset>
        </form>
    )
};
//