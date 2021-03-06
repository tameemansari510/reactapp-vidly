import React, { Component } from 'react';
import Form from './common/form';
import Joi from 'joi-browser';


class LoginForm extends Form {
    state = {
        data: {
            userName: '',
            password: ''
        },
        errors:{}
    };

    schema={
        userName: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    };

    doSubmit = () => {
        console.log('Submitted');
    };

    render() { 
        
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('userName','Username')}
                    {this.renderInput('password','Password','password')}
                    {this.renderButton('Login')}
                </form>
            </div>
     
        );
    }
}
 
export default LoginForm;