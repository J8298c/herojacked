import React from 'react';
import { Image } from 'semantic-ui-react';

const AppIcon = (props) => (
    <Image 
      src={props.image} size={props.size} className={props.className}
    />
);
export default AppIcon;
