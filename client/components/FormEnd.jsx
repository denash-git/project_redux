import React from 'react';
import { getOper } from '../requests/index.js';

class FormEnd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                modul: '',
                incass: '',
                msg: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.message = this.message.bind(this);
    }

    handleChange(e) {
        let symbol = e.target.value;
        let id = e.target.id;
        if (id === 'modul') {
            this.setState({modul: +symbol});
        } else {
            this.setState({incass: +symbol});
        }
    }

    message(text) {
        this.setState({msg: text});
    };

    handleSubmit(e) {
        e.preventDefault();
        this.message('Значения сохранены !');
        setTimeout(this.message, 2000, '');
        getOper(this.state.modul, this.state.incass);
    }

    render() {

        return (
            <form className="form-group">
                <fieldset className="form-group">
                <legend>Внесите данные :</legend>
                <label className = "form-control-label">Платежи по модулю :</label>
                    <input className = "form-control col-sm-2"
                           type="number"
                           onChange = {this.handleChange}
                           value = {this.state.modul}
                           placeholder = '***'
                           id = "modul"
                           min = "0"
                    />
                </fieldset>
                <fieldset className="form-group">
                <label>Инкассация : </label>
                    <input className = "form-control col-sm-2"
                           type = "number"
                           onChange = {this.handleChange}
                           value = {this.state.incass}
                           placeholder = '***'
                           id = "incass"
                           min = "0"
                    />
                </fieldset>
                <fieldset className="form-group">
                    <button type="submit"
                            onClick = {this.handleSubmit}
                            className="btn btn-secondary">
                            Сохранить
                    </button>
                </fieldset>
                <span className="label label-success">{this.state.msg}</span>
            </form>
        )
    }
}
export default FormEnd;
