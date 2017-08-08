import React from 'react';
import { connect } from 'react-redux';


import { getAmount } from './../requests/index.js';

import { HeadTable } from './../components/HeadTable.jsx';
import { BodyTable } from './../components/BodyTable.jsx';
import { act } from './../actions/index.js';


const mapStateToProps = (state) => (state);

const mapDispatchToProps = dispatch => ({
    click: (e) =>  dispatch(act.click(e)),
    change: (e) => dispatch(act.change(e))
});

class App_begin extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {

		getAmount('sale').then(amount => {
			let result = amount;
			console.log('сумма sale: ', result)
		})
	}

	render() {
		let {table_begin} = this.props;
		let {active}=this.props;  //активная ячейка, для активации инпута
		let head = table_begin[0]; //заголовок таблицы
		let body = table_begin.slice(1,table_begin.length); //тело
				
        return (
			<div className="container col-4 row">

				<h4>Остаток на начало дня</h4>

				<table id="begin" className="table table-bordered table-striped table-sm">

					<HeadTable 
						head={head}
					/>
					<BodyTable
						body={body}
						id={active.id}
						click={(e) => this.props.click(e)}
						change={(e) => this.props.change(e)}
					/>
				</table>
			</div>
		);	
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App_begin);
