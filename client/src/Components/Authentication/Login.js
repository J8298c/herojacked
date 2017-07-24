import React, {Component} from 'react';
import {Form} from 'semantic-ui-react';
import store from '../../store';
import Input from '../Input';
import Button from '../Button';

class Login extends Component {
	constructor(props){
		super(props);
		this.state ={
			email: '',
			password: '',
		}
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	onFormSubmit(e) {
		e.preventDefault();
		console.log('clicked');
	}
	render() {
		return (
			<Form>
				<Input
				htmlFor="email" label='Email'
				className='auth-input' name='email' type='text' onChange={event => this.setState({email: event.target.value})}
				/>
				<Input
				htmlFor="password" label='Password'
				className='auth-input' name='password' type='password' onChange={event => this.setState({password: event.target.value})}
				/>
				<Button onClick={this.onFormSubmit} className='auth-btn' content='Login' />
			</Form>
		)
	}

}
