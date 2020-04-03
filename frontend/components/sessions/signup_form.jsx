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
                        {this.props.signUpErrors.map((error, index) => (
                                <div className='signUp-error' key={`${index}`}>
                                    {error}
                                </div>
                            ))}
                        <div className='create-acccount-container'>
                            <div className='sign-up-email'>
                                <div className='sign-up-email-text'>Email
                                    <div className='sign-up-field'>
                                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                                    </div>
                                </div>
                            </div>
                            <div className='sign-up-password'>
                                <div className='sign-up-password-text'>Password
                                    <div className='sign-up-password-field'>
                                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                                    </div>
                                </div>
                            </div>
                            <div className='signup-form-button'>
                                <input type="submit" value='CREATE ACCOUNT' />
                            </div>
                            <div>
                                <div className='signup-form-bottom'>
                                    lululemon will use information you submit (including identifiers, commercial information, and internet or other electronic network activity information) to fulfill this request. To learn more, see our privacy policy and terms of use.  
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;