import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchingAWorkout } from '../../actions/index.js';

class Workout extends Component {
	//turn this into contructor https://stackoverflow.com/questions/40828004/constructor-vs-componentwillmount-what-a-componentwillmount-can-do-that-a-const
	componentWillMount(props) {
		const { name } = this.props.match.params;
		this.props.fetchingAWorkout(name);
		}
    render(props) {
    	console.log(this.props.workout);
    	let name;
    	if (this.props.workout){
    		name = this.props.workout.name;
    		console.log(name);
    	}
        return (
            <h1>{name}</h1>
        );
    }
}

function mapStateToProps(state) {
	const { workout } = state;

	return {
		workout,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchingAWorkout }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Workout);
