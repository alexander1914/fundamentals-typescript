import logo from './logo.svg';
import './App.css';
import Contador from '../src/componentes/Contador.tsx'
import { Component } from 'react';

class App extends Component {
  render(){
    return (
      <div className="App">      
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Testando com react</p>
          <Contador valorInicial={9876} />
          <Contador />
        </header>      
      </div>
    );
  }  
}
export default App;
