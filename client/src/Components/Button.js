import React from 'react';

const Button = (props) => (
    <button className={`mdl-button mdl-js-button mdl-button--raised ${props.className}`} onClick={props.onClick}>
        {props.text}
    </button>
);
export default Button;
