import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import Login from './Components/Authentication/Login';
import WorkoutListContainer from './Components/WorkoutList/WorkoutListContainer';
import AddWorkout from './Components/AddWorkout/AddWorkout';

const Routes = () => (
	<Provider store={store}>
	<Router>
		<div>
			<Route exact path='/' component={LandingPage} />
			<Route path='/login' component={Login} />
			<Route path='/workouts' component={WorkoutListContainer} />
			<Route path='/workouts/create' component={AddWorkout} />
		</div>
	</Router>
	</Provider>
)

export default Routes;
