import React from 'react';
import { connect } from 'react-redux';

import { HeadTable } from './../components/HeadTable.jsx';
import { BodyTable } from './../components/BodyTable.jsx';
import { act, prompt } from './../actions/index.js';

const mapStateToProps = (state, params) => ({
    name: params.match.params.name,
    head: state.reducer3.table_head,
    body: state.reducer3.table_body,
	active: state.reducer3.active
});

const mapDispatchToProps = dispatch => ({
    click: (e) =>  dispatch(act.click(e)),
    change: (e) => dispatch(act.change(e)),
	prompt: (name) => dispatch(prompt(name))
});

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		{this.props.prompt(this.props.name)}
	 }

	render() {

	console.log(this.props);

        return (
			<div className="container col-7 row">

				<h4>тут наименование таблицы</h4>

				<table id={this.props.name} className="table table-bordered table-striped table-sm">

					<HeadTable
						head={this.props.head}
					/>
					<BodyTable
						body={this.props.body}
						id={this.props.active.id}
						click={this.props.click}
						change={this.props.change}
					/>
				</table>
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
