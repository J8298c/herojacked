import React from 'react';
import { Image } from 'semantic-ui-react';

const AppIcon = (props) => (
    <Image 
      src={props.image} size={props.size} classname={props.className}
    />
);
export default AppIcon;
