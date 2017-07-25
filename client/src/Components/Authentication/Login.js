import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Input from '../Input';
import Button from '../Button';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(event) {
		event.preventDefault();
		console.log('clicked');
	}
	render() {
		return (
			<Form>
				<Input
					label='Email' htmlFor='email' type='text'
					className='auth-input' name='email'
					 onChange={event => this.setState({email: event.target.value})}
				 />
				 <Input
 					label='Password' htmlFor='password' type='password'
 					className='auth-input' name='password'
 					 onChange={event => this.setState({password: event.target.value})}
 				 />
				 <Button content='Login' className='auth-btn'
					 onClick={this.onFormSubmit}
				 />
			</Form>
		)
	}
};

export default Login;
