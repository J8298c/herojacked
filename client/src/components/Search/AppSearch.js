import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import Inputs from '../Input';
import Buttons from '../Buttons';


class AppSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  onSearchSubmit(event) {
    event.preventDefault();
    console.log(this.state, 'the state to query db')
  }
render() {
    return (
        <Form>
            <Inputs
              type="text" placeHolder="Search Workouts"
              onChange={event => this.setState({query: event.target.value})}
            />
          <Buttons
            color="green" onClick={this.onSearchSubmit} content="Submit"
          />
        </Form>
    );
}
}

export default AppSearch;

