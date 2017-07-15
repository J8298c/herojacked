import React from 'react';
import Button from 'muicss/lib/react/button';

const AppButton = (props) => (
    <Button color={props.color} className={props.className} onClick={props.onClick}>
        {props.text}
    </Button>
);

export default AppButton;
