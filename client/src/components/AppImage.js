import React from 'react';
import { Image } from 'semantic-ui-react';

const AppImage = (props) => (
    <Image 
      src={props.imageSrc} size={props.imageSize} shape={props.shape}
      className={props.className}
    />
);
export default AppImage;
