import React from 'react';
import './App.css';
import Navbar from './templates/nevbar';
import TodoList from './Todo/TodoList';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserList from './User/UserList';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/todos" component={TodoList} />
          <Route path="/users" component={UserList} />
        </Switch>
      </Router>
    );
  }
}

const HomePage = () => {
  return (
    <div>Home Page</div>
  )
}
