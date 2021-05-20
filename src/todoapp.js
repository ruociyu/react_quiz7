import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToDoTitle from './todotitle';
import ToDoList from './todolist';


function ToDoApp(){
    return(
      <div id="main">
        <ToDoTitle />
        <ToDoList />
      </div>
    );
}

export default ToDoApp;