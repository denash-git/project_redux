import React from 'react';
import { HeadTable } from './../components/HeadTable.jsx';
import { BodyTable } from './../components/BodyTable.jsx';
import { click, change } from './../actions/actions.js';

export default class App_begin extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			setting_table: [
				{
					name: "rem",
					profil: [ 1, 1, 1, 0]
				},
				{
					name: "begin",
					profil: [0, 1, 1],
					type: ["number", "number", "number"]
				},
				{
					name: "sale",
					profil: [ 0, 1, 1, 1, 0],
					type: ["number", "string", "number", "number", "number"]
				}

			],
				
			table_begin: [
				['Номинал', 'Количество', 'Сумма'],
				[5000, 2, 0],
				[1000, null, 0],
				[500, null, 0],
				[100, null, 0],
				[50, 3, 0],
				['мелочь', null, 0]
			],
			active: {}
		};
		this.click = click.bind(this);
		this.change = change.bind(this);
	}


	// componentDidMount() {	
	// }
	
	
	render() {
		let {table_begin} = this.state;
		let {active}=this.state;  //активная ячейка, для активации инпута
		let head = table_begin[0]; //заголовок таблицы
		let body = table_begin.slice(1,table_begin.length); //тело
				
        return (
			<div className="container col-3 row">

			
				<h4>Остаток на начало дня</h4>

				<table id="begin" className="table table-bordered table-striped table-sm">

					<HeadTable 
						head={head}
					/>
					<BodyTable
						body={body}
						id={active.id}
						click={(e) => this.click(e)}
						change={(e) => this.change(e)}
					/>
				</table>
			</div>
		);	
	}
};
