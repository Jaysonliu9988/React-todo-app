import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  fetch('api/users')
  .then(response => response.json())
  .then(data => console.log(data));

  fetch('api/todos')
  .then(response => response.json())
  .then(data => console.log(data)); 


  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
