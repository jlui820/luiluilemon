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
                            <div className='password-requirements'>
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                                <p>4</p>
                            </div>
                            <div className='signup-form-button'>
                                <input type="submit" value='CREATE ACCOUNT' />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignupForm;