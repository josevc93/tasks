import React, { Component } from 'react';
import style from './Home.css';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="jumbotron content">
            <h1 className="display-4">Aplicación de tareas</h1>
            <p className="lead">Gestiona tus tareas fácilmente.</p>
            <hr className="my-4" />
            <Link to={'/tareas'} className="btn btn-primary btn-lg" role="button">Tareas</Link>
          </div>
        </div>
      </div>
    );
  }
}
