/*
  using fetchworkout to hook up search input to DB
  to give user ability to search for workouts
  need to redirect them to workout page or to create_workout if not found in the DB
 */
import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchWorkouts } from '../../actions/index';
import Inputs from '../Input';
import Buttons from '../Buttons';

class AppSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { query: '' };
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  onSearchSubmit(event) {
    event.preventDefault();
    this.props.fetchWorkouts(this.state.query);
    console.log(this.state.query, 'the state to query db');
  }

  render() {
    return (
      <Form>
        <Inputs
          type="text" placeHolder="Search Workouts" className="welcome-search"
          onChange={event => this.setState({ query: event.target.value })}
        />
        <Link to={`/workout/${this.state.query}`}><Buttons
          color="green" content="Submit"
        />
        </Link>
      </Form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWorkouts }, dispatch);
}
export default connect(null, mapDispatchToProps)(AppSearch);

