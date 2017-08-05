import React from 'react';
import { connect } from 'react-redux';

import { HeadTable } from './../components/HeadTable.jsx';
import { BodyTable } from './../components/BodyTable.jsx';
import { act } from './../actions/index.js';

const mapStateToProps = (state) => (state);

const mapDispatchToProps = dispatch => ({
    click: (e) =>  dispatch(act.click(e)),
    change: (e) => dispatch(act.change(e))
});

class App_sale extends React.Component {
	constructor(props) {
		super(props);
	}


	// componentDidMount() {	
	// }
	
	
	render() {
		let {table_sale} = this.props;
		let {active}= this.props;  //активная ячейка, для активации инпута
		let head = table_sale[0]; //заголовок таблицы
		let body = table_sale.slice(1,table_sale.length); //тело

        return (
			<div className="container col-7 row">


				<h4>Продажи</h4>

				<table id="sale" className="table table-bordered table-striped table-sm">

					<HeadTable
						head={head}
					/>
					<BodyTable
						body={body}
						id={active.id}
						click={this.props.click}
						change={this.props.change}
					/>
				</table>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App_sale);
