import React from 'react';
import { connect } from 'react-redux';
import { thunkGetReport } from '../requests/thunk.js';

const mapStateToProps = (state) => ({
    report: state.reducer.report
});

const mapDispatchToProps = dispatch => ({
    thunkGetReport: () => dispatch(thunkGetReport()),
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
            <div>
                <br />
                <p>На начало дня : {this.props.report.begin}</p>
                <p>Продаж : {this.props.report.sale}</p>
                <p>Расход : {this.props.report.outtrans}</p>
                <p>Приход : {this.props.report.intrans}</p>
                <p>На конец дня : {this.props.report.end}</p>
                <p>Платежи: {this.props.report.modul}</p>
                <p>Инкассация : {this.props.report.inkass}</p>
                <p>Балланс дня : {this.props.report.result}</p>
                <br />
                <p>Вывод : {this.props.report.report}</p>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Report);

