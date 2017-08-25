import React from 'react';

import { HeadTable } from './HeadTable.jsx';

export const ReportTable = ({setting, body, amount}) => {

    return (

        <div className="container">

            <h4>{setting.caption}</h4>

            <table className="table table-bordered table-striped table-sm">

                <caption>ИТОГО: {amount} руб.</caption>

                <HeadTable
                    head={setting.head || []}
                />
                <tbody>
                {body.map((elem, row) =>

                    <tr key={row}>

                        {elem.slice(1,elem.length).map((item, cell) =>

                            <td key={cell}>
                                {item}
                            </td>)}
                    </tr>)
                }
                </tbody>
            </table>
        </div>
    )
};
