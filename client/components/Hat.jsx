import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = (state) => (state);

// const mapDispatchToProps = dispatch => ({
//
// });

class Hat extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <ul>
                    <li><a href="/begin">Начало дня</a></li>
                    <li><a href="/sale">Продажи</a></li>
                    <li><a href="/outtrans">Расход</a></li>
                    <li><a href="/intrans">Приход</a></li>
                    <li><a href="/end">Конец дня</a></li>
                    <li><a href="/report">Отчет</a></li>
                </ul>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Hat);

