import React, { Component } from 'react';
import { Image } from 'semantic-ui-react';
import WelcomeButton from '../WelcomeButton';
import shoulderpress from '../../images/shoulderpress.svg';

class WelcomeContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		}
	}
	render() {
		const catergories = ['Weight', 'Workouts', 'Steps', 'Water']
		const welcomeCats = catergories.map((category) => (
			<WelcomeButton
				label={category}
				shape='rounded'
				src={shoulderpress}
				key={category}
			/>
		));
		return(
			<Image.Group>
				{welcomeCats}
			</Image.Group>
		)
	}
}
export default WelcomeContainer;
