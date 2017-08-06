import React from 'react';
import { Button } from 'react-mdl';

const appButton = (props) => (
    <Button
    accent={props.accent}
    colored={props.colored}
    primary={props.primary}
    raised={props.raised}
    ripple={props.ripple}
    />
);

export default appButton;
