import React, {Fragment} from 'react';
import './App.css';
import InputToDo from './components/InputToDo';

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputToDo />
      </div>
    </Fragment>
  );
}

export default App;
