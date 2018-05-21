import React, { Component } from 'react';
import style from './Tasks.css';

export class Tasks extends Component {

  constructor(){
    super()
    this.state = {
      items: [],
      inputName: '',
      inputDescription: ''
     }
  }

  componentDidMount() {
    this.getTasks()
   }

   getTasks() {
     fetch(`http://localhost:3001/tasks`)
     		.then (res => res.json())
     		.then (data => {
             const items = data
             this.setState({ items })
         })
   }

   deleteTask(item) {
      fetch(`http://localhost:3001/tasks/` + item.id, {
        method: 'delete'
      })
      .then(response => this.getTasks())
    }

    changeDataForm = (e) => {
      if (e.target.id == 'description') {
        this.setState({ inputDescription: e.target.value })
      } else if (e.target.id == 'nameTask') {
        this.setState({ inputName: e.target.value })
      }
    }

    newTask = (e) => {
      e.preventDefault();
      var formData = {
         title: this.state.inputName,
         description: this.state.inputDescription
       }
      return fetch('http://localhost:3001/tasks', {
          method: 'POST',
          headers: new Headers({
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }),
          body: JSON.stringify(formData),
      })
      .then(response =>
        this.getTasks()
      )
   }


  render() {
    return (
      <div className="tasks">
          <div className="row">
            <div className="col-3">
              <div className="card">
                <h5 className="card-header">Nueva tarea</h5>
                <div className="card-body">
                  <form onSubmit={this.newTask}>
                    <div className="form-group">
                      <input type="text" className="form-control" id="nameTask" placeholder="Nombre..." onChange={this.changeDataForm}  />
                    </div>
                    <div className="form-group">
                      <textarea className="form-control" id="description" rows="3" placeholder="Descripción..." onChange={this.changeDataForm}></textarea>
                    </div>
                    <button className="btn btn-success">Añadir</button>
                  </form>
                </div>
              </div>
            </div>
              {this.state.items && this.state.items.map((item) =>
                   <div className="col-3" key={item.id}>
                     <div className="card">
                       <h5 className="card-header">{item.title}</h5>
                       <div className="card-body">
                         <p className="card-text">{item.description}</p>
                         <a className="btn btn-danger" onClick={this.deleteTask.bind(this, item)}>Eliminar</a>
                       </div>
                     </div>
                   </div>
              )}
          </div>
      </div>
    );
  }
}
