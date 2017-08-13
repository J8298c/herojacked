import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const AppButton = (props) => (
    <Button 
      color={props.color} animated={props.animated} 
    >
        <Button.Content visible>
            {props.buttonContent}
        </Button.Content>
        <Button.Content hidden>
            <Icon 
              name={props.iconName}
            />
        </Button.Content>
    </Button>
);
export default AppButton;
