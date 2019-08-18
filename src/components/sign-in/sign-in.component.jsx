import React from 'react';

import './sign-in.style.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signInWithGoogle } from "../../firebase/firebase.util";

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            'email': '',
            'password': ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    handleChange = event => {
        const {value, name} = event;

        this.setState({[name]: value})
    }

    render() {
        return (
            <div>
                <h2>I have a user already</h2>
                <span>Login with your email and password OR with your Google account</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='text'
                        value={this.state.email}
                        required
                        handleChange={this.handleChange}
                        label='Email'
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        required
                        label='Password'
                    />

                    <CustomButton type='submit'>Sign In</CustomButton>

                    <CustomButton onClick={ signInWithGoogle }>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;