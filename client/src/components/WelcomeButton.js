import React from 'react';
import { Image } from 'semantic-ui-react';

const WelcomeButton = (props) => (
	<div>
		<Image 
			icon={props.name}
			src={props.image}
			label={props.label}
			shape={props.rounded}
		/>
	</div>
);

export default WelcomeButton;