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
                                    <div>
                                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                                    </div>
                                </div>
                            </div>
                            <div className='login-password'>
                                <div>Password
                                    <div className='login-password-text'>
                                        <input type="password" value={this.state.password} onChange={this.update('password')} />        
                                    </div>
                                </div>
                            </div>
                            <input type="submit" value='SIGN IN' />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;

{/* <div>
    <form onSubmit={this.handleSubmit}>
        <label>Email:
                        <input type="text" value={this.state.email} onChange={this.update('email')}
            />
        </label>
        <label>Password:
                        <input type="password" value={this.state.password} onChange={this.update('password')}
            />
        </label>
        <input type="submit" value='Sign In' />
    </form>
</div> */}