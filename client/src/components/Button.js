import React from 'react';
import { Button } from 'react-toolbox/lib/button';

function Buttons(props) {
  return (
        <div>
            <Button
              label={props.label}
            />
        </div>
  );
}

export default Buttons;
