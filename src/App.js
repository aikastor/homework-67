import React, {Component} from 'react';
import PassLock from "./containers/PassLock/PassLock";
import Calculator from "./containers/Calculator/Calculator";
import './App.css';

class App extends Component {
  render() {
    return (
        <div className='App'>
          <PassLock/>
          <Calculator/>
        </div>
    );
  }
}

export default App;