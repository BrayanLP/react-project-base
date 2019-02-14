import React, { Component } from 'react';
import logo from '../../logo.svg';
import { Link } from 'react-router-dom';
import routes from '../../routes';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1> Proyecto Base RCP</h1>

        <Link to={routes.demo}>
          <p>Api Demo</p>
        </Link>
      </header>
    );
  }
}

export default Home;
