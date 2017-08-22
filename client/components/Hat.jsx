import React from 'react';

export const Hat = () => {

    return (
        <div className="container">
                <a className="btn btn-secondary" href="/list/begin">Начало дня</a>
                <a className="btn btn-secondary" href="/list/sale">Продажи</a>
                <a className="btn btn-secondary" href="/list/outtrans">Расход</a>
                <a className="btn btn-secondary" href="/list/intrans">Приход</a>
                <a className="btn btn-secondary" href="/list/end">Конец дня</a>
                <a className="btn btn-secondary" href="/report">Отчет</a>
            <br></br>
        </div>
    );
};