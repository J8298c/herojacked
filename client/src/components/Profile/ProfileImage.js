import React from 'react';
import { Image } from 'semantic-ui-react';

const ProfileImage = (props) => (
  <Image
    src={props.image} size={props.size} 
  />
);

export default ProfileImage;