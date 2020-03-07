import React from 'react';

class SignupForm extends React.Component {
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
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return (
            <div className ='sign-up-form-container-wrapper'>
                <div className='sign-up-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='create-acccount-container'>
                            <div className='sign-up-email'>
                                <div>Email
                                    <div>
                                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                                    </div>
                                </div>
                            </div>
                            <div className='sign-up-password'>
                                <div>Password
                                    <div>
                                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value='CREATE ACCOUNT' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;