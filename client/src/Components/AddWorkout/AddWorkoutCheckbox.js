import React from 'react';
import { Form } from 'semantic-ui-react';
import Checkbox from '../Checkbox';

const AddWorkoutCheckBox = () => {
  const bodyParts = ['Chest', 'Bicep', 'Triceps', 'Shoulders', 'Legs'];
  const checkBoxCat = [];
  for (let i = 0; i < bodyParts.length; i++) {
    checkBoxCat.push(<Checkbox
      label={bodyParts[i]} key={bodyParts[i]}
    />);
  }
  return (
    <Form.Field>
      {checkBoxCat}
    </Form.Field>
  );
};

export default AddWorkoutCheckBox;
