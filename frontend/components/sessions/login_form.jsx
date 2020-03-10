import React from 'react';

class LoginForm extends React.Component {
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
            <div className='login-form-container-wrapper'>
                <div className='login-form-container'>
                    <form onSubmit={this.handleSubmit}>
                        <div className='login-acccount-container'>
                            <div className='login-email'>
                                <div className='login-email-text'>Email Address
                                    <div className='login-field'>
                                        <input type="text" value={this.state.email} placeholder='email' onChange={this.update('email')} />
                                    </div>
                                </div>
                            </div>
                            <div className='login-password'>
                                <div className='login-password-text'>Password 
                                    <div className='password-field'>
                                        <input type="password" value={this.state.password} placeholder='password' onChange={this.update('password')} />        
                                    </div>
                                </div>                               
                            </div>
                            <div className='login-form-button'>
                                <input type="submit" value='SIGN IN' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;
