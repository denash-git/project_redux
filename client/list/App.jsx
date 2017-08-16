import React from 'react';
import { connect } from 'react-redux';

import { HeadTable } from '../components/HeadTable.jsx';
import { BodyTable } from '../components/BodyTable.jsx';
import { FormEnd } from "../components/FormEnd.jsx";
import { handleClick, handleChange } from '../actions/index.js';
import { thunkGetBody, thunkGetSetting, thunkGetAmount, thunkSendData } from '../requests/thunk.js'

const mapStateToProps = (state, params) => ({
    name: params.match.params.name,
    setting: state.reducer.setting,
    body: state.reducer.body,
	active: state.reducer.active,
	amount: state.reducer.amount
});

const mapDispatchToProps = dispatch => ({
    handleClick: (e) =>  dispatch(handleClick(e)),
    handleChange: (e) => dispatch(handleChange(e)),
	thunkGetBody: (name) => dispatch(thunkGetBody(name)),
	thunkGetSetting: (name) => dispatch(thunkGetSetting(name)),
	thunkGetAmount: (name) => dispatch(thunkGetAmount(name)),
	handleBlur: (e, {active}) => dispatch(thunkSendData(e, active))

});

class App extends React.Component {
	constructor(props) {
		super(props);

	}

	componentDidMount() {
		const name = this.props.name;
		this.props.thunkGetBody(name);
		this.props.thunkGetSetting(name);
		this.props.thunkGetAmount(name);
	 }

	render() {

		let Form = '';
        if (this.props.name === 'end') {Form=<FormEnd />}

        return (
			<div className="container col-7 row">

				<h4>{this.props.setting.caption}</h4>

				<table id={this.props.name} className="table table-bordered table-striped table-sm">

					<caption>ИТОГО: {this.props.amount} руб.</caption>

					<HeadTable
						head={this.props.setting.head || []}
					/>
					<BodyTable
						body={this.props.body}
						id={this.props.active.id}
						type={this.props.active.type}
						click={this.props.handleClick}
						change={this.props.handleChange}
						blur={this.props.handleBlur}
					/>
				</table>
				{Form}
			</div>
		);
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
