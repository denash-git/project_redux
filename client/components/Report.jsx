import React from 'react';
import { connect } from 'react-redux';
import { thunkGetReport } from '../requests/thunk.js';

const mapStateToProps = (state) => ({
    report: state.reducer.report
});

const mapDispatchToProps = dispatch => ({
    thunkGetReport: () => dispatch(thunkGetReport())
});

class Report extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.thunkGetReport();
    }

    render() {

        return (
            <div className="container">
                <br />
                <h4>Отчёт</h4>
                <p>На начало дня : {this.props.report.begin} руб.</p>
                <p>Продаж : {this.props.report.sale} руб.</p>
                <p>Расход : {this.props.report.outtrans} руб.</p>
                <p>Приход : {this.props.report.intrans} руб.</p>
                <p>На конец дня : {this.props.report.end} руб.</p>
                <p>Платежи: {this.props.report.modul} руб.</p>
                <p>Инкассация : {this.props.report.incass} руб.</p>
                <p><b>Балланс дня : {this.props.report.result} руб.</b></p>
                <br />
                <p><b><i>Вывод : {this.props.report.report}</i></b></p>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Report);

