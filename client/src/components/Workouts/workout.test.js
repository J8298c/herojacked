import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import WorkoutContainer from './WorkoutContainer';
import Workouts from './Workouts';
import Workout from './Workout';

describe('Workouts', () => {
  it('Renders the workoutcontainer', () => {
    const workoutContainer = shallow(<WorkoutContainer />);
    expect(workoutContainer.find('Workouts').length).toEqual(1);
  });
});
