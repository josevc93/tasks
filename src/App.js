import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';

// Components
import { Menu } from './components/Menu/Menu';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
import { Tasks } from './components/Tasks/Tasks';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container-fluid cont">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/tareas' component={Tasks} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
