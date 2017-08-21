import React from 'react';

export const Hat = () => {

    return (
        <div className="hat">
            <ul>
                <li><a href="/list/begin">Начало дня</a></li>
                <li><a href="/list/sale">Продажи</a></li>
                <li><a href="/list/outtrans">Расход</a></li>
                <li><a href="/list/intrans">Приход</a></li>
                <li><a href="/list/end">Конец дня</a></li>
                <li><a href="/report">Отчет</a></li>
            </ul>
            <br></br>
        </div>
    );
};