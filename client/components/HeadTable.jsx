/*
формирует заголовок таблицы
вх данные - head - массив заголовков /колонок/ таблицы
*/
import React from 'react';

export const HeadTable = ({head}) => {

	return (
		<thead className="table-success table-fixed">
			<tr>
				{head.map((item, index) =>
        			<th key={index}>{item}</th>
        		)}
      		</tr>
    	</thead>
	)
};
