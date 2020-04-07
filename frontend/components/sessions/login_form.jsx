import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.fillDemo = this.fillDemo.bind(this)
        this.handleDemo = this.handleDemo.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user);
    }

    handleDemo(e, speed = 120) {
        e.preventDefault();
        const user = { email: "tucker@gmail.com", password: "123456" };
        let { email, password } = user;
        if (this.state.email !== email) {
            const inputUser = setInterval(() => {
                if (this.state.email !== email) {
                    const temp = email.slice(0, this.state.email.length + 1);
                    this.setState({ email: temp });
                } else {
                    clearInterval(inputUser);
                    animatePassword();
                }
            }, speed);
        }

        const animatePassword = () => {
            const inputPassword = setInterval(() => {
                if (this.state.password !== password)
                    this.setState({
                        password: password.slice(0, this.state.password.length + 1)
                    });
                    else {
                        clearInterval(inputPassword);
                        login();
                    }
            }, speed);
        }

        const login = () => {
            this.props.processForm(this.state)
            this.setState({ username: '', password:'' });
        };
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    fillDemo(e) {
        e.preventDefault();
        this.props.processForm({email:'tucker@gmail.com', password: '123456'})
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, index) => (
    //                 <div className='login-error' key={`${index}`}>
    //                     {error}
    //                 </div>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        return (
            <div className='login-form-container-wrapper'>
                <div className='login-form-container'>
                    <form onSubmit={this.handleSubmit}>
                            {this.props.loginErrors.map((error, index) => (
                                <div className='login-error' key={`${index}`}>
                                    {error}
                                </div>
                            ))}
                        <div className='login-acccount-container'>
                            <div className='login-email'>
                                <div className='login-email-text'>Email Address
                                    <div className='login-field'>
                                        <input type="text" value={this.state.email} onChange={this.update('email')} />
                                    </div>
                                </div>
                            </div>
                            <div className='login-password'>
                                <div className='login-password-text'>Password 
                                    <div className='password-field'>
                                        <input type="password" value={this.state.password}  onChange={this.update('password')} />        
                                    </div>
                                </div>                               
                            </div>
                            <div>
                                <button className='demo' onClick={this.handleDemo}> DEMO USER </button>
                            </div>
                            <div className='login-form-button'>
                                <input className='signin-button' type="submit" value='SIGN IN' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginForm;
