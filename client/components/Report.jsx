import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => (state);

class Report extends React.Component {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //
    // }

    render() {

        return (
            <div>
                <br></br>
                <p>это отчет детка!</p>
            </div>
        )
    }
}
export default connect(mapStateToProps)(Report);

