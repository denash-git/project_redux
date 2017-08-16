/*
формирует тело таблицы
body- массив строк
id - координаты для активации input
contentEditable
*/
import React from 'react';

export const BodyTable = ({body, id, click, change,type, blur}) => {

	return (
      	<tbody>
			{body.map((elem, row) =>

				<tr key={row} id={elem[0]}>

			{elem.slice(1,elem.length).map((item, cell) =>

				<td key={cell}
					id={row+''+cell}
					onClick={click}>

					{(id === (row+''+cell)) ?
						<input
							type={type}
							onKeyUp={change}
							onBlur={blur}
							min="1"
							defaultValue={item}
							autoFocus
						/>: item
					}
				</td>)}
				</tr>)}
    	</tbody>
    )
};