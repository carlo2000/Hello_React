
import React from 'react';
import './App.css';

function App(props) {
  const accion =props.subject;
  return (
    <h1>hola , {accion}</h1>
  );
}

export default App;
