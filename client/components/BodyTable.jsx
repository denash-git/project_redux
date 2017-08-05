/*
формирует тело таблицы

body- массив строк тела таблицы
active - объект с координатами для активации input
contentEditable
*/

import React from 'react';


export const BodyTable = ({body, id, click, change}) => {

	return (
      	<tbody>
			{body.map((elem, row) =>
				<tr key={row}>

			{elem.map((item, cell) =>
				<td key={cell}
					id={elem[0]+''+cell}
					onClick={click} >

					{(id === (elem[0]+''+cell)) ?
						<input className='focus' onChange={change} value={item} />: item}
				
				</td>)}
				</tr>)}
    	</tbody>
    )
};
