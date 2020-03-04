import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.curentTarget.value })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.formType}</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            />
                    </label>
                    <input type="submit"/>
                    {/* <button>Sign In</button> */}
                </form>
            </div>
        )
    }
}

export default SessionForm;