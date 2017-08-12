import React from 'react';
import { connect } from 'react-redux';

import { HeadTable } from '../components/HeadTable.jsx';
import { BodyTable } from '../components/BodyTable.jsx';
import { click, change } from '../actions/index.js';
import { thunkGetBody, thunkGetSetting } from '../requests/thunk.js'

const mapStateToProps = (state, params) => ({
    name: params.match.params.name,
    setting: state.reducer3.setting,
    body: state.reducer3.body,
	active: state.reducer3.active
});

const mapDispatchToProps = dispatch => ({
    click: (e) =>  dispatch(click(e)),
    change: (e) => dispatch(change(e)),
	thunkGetBody: (name) => dispatch(thunkGetBody(name)),
	thunkGetSetting: (name) => dispatch(thunkGetSetting(name))
});

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.thunkGetBody(this.props.name);
		this.props.thunkGetSetting(this.props.name);
	 }

	render() {

        return (
			<div className="container col-7 row">

				<h4>{this.props.setting.caption}</h4>

				<table id={this.props.name} className="table table-bordered table-striped table-sm">

					<HeadTable
						head={this.props.setting.head || []}
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
