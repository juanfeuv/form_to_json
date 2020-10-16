import React, { useState } from 'react';
import './App.css';

function App() {
  const [jsonString, setJsonString] = useState('{}');

  const [state, setState] = useState({});

  const generarJSON = e => {
    e.preventDefault();

    setJsonString(JSON.stringify(state));
  };

  const changeState = e => {
    if (e.target.name === 'age') {
      setState({ ...state, [e.target.name]: Number(e.target.value) });
    } else {
      setState({ ...state, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="App">
      <form>
        <label>
          Ingrese su nombre: &nbsp;
          <input
            placeholder="Ingrese su nombre"
            name="name"
            type="text"
            onChange={changeState}
          />
        </label>
        <br/>
        <label>
          Ingrese su edad: &nbsp;
          <input
            placeholder="Ingrese su edad"
            name="age"
            type="number"
            onChange={changeState}
          />
        </label>
        <br/>
        <br/>
        <button onClick={generarJSON}>
          Generar JSON
        </button>
      </form>
      <br/>
      <br/>
      <span>JSON traslator</span>
      <div>
        {jsonString}
      </div>
    </div>
  );
}

export default App;
