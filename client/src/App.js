import React, {Fragment} from 'react';
import './App.css';
import InputToDo from './components/InputToDo';
import ListToDos from './components/ListToDos';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
        <ListToDos />
      </div>
    </Fragment>
  );
}

export default App;
