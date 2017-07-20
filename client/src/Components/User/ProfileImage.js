import React from 'react';

const ProfileImage = (props) => (
  <div>
    <img src={props.imgUrl} alt={props.altText} />
  </div>
);

export default ProfileImage;
