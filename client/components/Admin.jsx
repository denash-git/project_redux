import React from 'react';
import { connect } from 'react-redux';
import { thunkGetBody, thunkGetSetting, thunkGetAmount } from '../requests/thunk.js'
import { ReportTable } from './ReportTable.jsx';
import Report from './Report.jsx'

const mapStateToProps = (state) => ({
    setting: state.reducer.setting,
    body: state.reducer.body,
    amount: state.reducer.amount
});

const mapDispatchToProps = dispatch => ({
    thunkGetBody: (name) => dispatch(thunkGetBody(name)),
    thunkGetSetting: (name) => dispatch(thunkGetSetting(name)),
    thunkGetAmount: (name) => dispatch(thunkGetAmount(name)),
});

class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: '',
            choice: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        let date = new Date();
        let dateStr = date.getFullYear()
            + '-' + ('0' + (date.getMonth() + 1)).slice(-2)
            + '-' + ('0' + date.getDate()).slice(-2);
        //let date = data.toLocaleString("ru", {year: 'numeric', month: 'numeric', day: 'numeric' })
        this.setState({date: dateStr});
    }

    handleChange(e) {
        let vol = e.target.value;
        let id = e.target.id;
        if (id === 'date') {
            this.setState({date: vol});
        } else {
            this.setState({choice: vol});
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        let name = this.state.choice;
        console.log(name)
        if (name !== 'report') {
            this.props.thunkGetBody(name);
            this.props.thunkGetSetting(name);
            this.props.thunkGetAmount(name);
        }
    }

    render() {

        let Form;
        if (this.state.choice === 'report') {Form = <Report />}
        else {
            Form = <ReportTable setting={this.props.setting}
                                body={this.props.body}
                                amount={this.props.amount}
            />;
        }

        return (
            <div className="container">
            <form className="container">
                <fieldset className="form-group">
                    <legend>Выберите исходные данные :</legend>
                    <label className = "form-control-label">Просмотр на дату :</label>
                    <input className = "form-control col-sm-3"
                           type="date"
                           id = "date"
                           value={this.state.date}
                           onChange={this.handleChange}
                    />
                </fieldset>

                <fieldset className="form-group">
                    <label>Тип данных   :</label>
                    <select className = "form-control col-sm-3"
                            id="choice"
                            defaultValue={this.state.choice}
                            onChange={this.handleChange}
                    >
                        <option value="begin">Начало дня</option>
                        <option value="sale">Продажи</option>
                        <option value="outtrans">Расход</option>
                        <option value="intrans">Приход</option>
                        <option value="end">Конец дня</option>
                        <option value="report">Отчет</option>
                    </select>
                </fieldset>
                <fieldset className="form-group">
                    <button type="submit"
                            onClick = {this.handleSubmit}
                            className="btn btn-secondary">
                        Выполнить
                    </button>
                </fieldset>
            </form>
                {Form}
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin);
