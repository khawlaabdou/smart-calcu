import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { timingSafeEqual } from 'crypto';

class App extends Component {
  constructor(){
    super();
    this.state = {
      result : "",
      operation :""

    }
  }

//fonction addOperation : value => recuperé le valeur de input puis operation concatainer l'ancien valeur avec le neveau valeur
//result prend la nouvelle valeur

  addOperation  = (event)=>{
    const value = event.target.value;
    this.setState({
      operation : this.state.operation+value,
      result : value,
    })
  }
  //value prend la chaine concatainé puis convertir operation en operation math et le calculer 
  resultat = () =>{
    const value = eval(this.state.operation);
    this.setState({
      operation : value,
      result : value

    })

  }

  delete = () =>{
    this.setState({
      operation: "",
      result :""
    })
  }
  render() {
    return (
      <div>
        <h5>Calculatte</h5>
        <table border="2">
          <tr><td colSpan="3">
          <input class="test" type="text" value={this.state.result} name="value"></input></td>
          <td><button class="buttonDelete" onClick={this.delete}>c</button></td>

          </tr>
          <tr>
              <td><button className="buttonChiffre" value="1" name="1"  onClick={this.addOperation}>1</button></td>
              <td><button className="buttonChiffre" value="2" name="2" onClick={this.addOperation}>2</button></td>
              <td><button className="buttonChiffre" value="3" name="3" onClick={this.addOperation}>3</button></td>              
              <td><button className="buttonOperation" value="+" name="+"   onClick={this.addOperation}>+</button></td>
          </tr>
          <tr>
              <td><button className="buttonChiffre" value="4" name="4" onClick={this.addOperation}>4</button></td>
              <td><button className="buttonChiffre"value="5" name="5" onClick={this.addOperation}>5</button></td>
              <td><button className="buttonChiffre" value="6" name="6" onClick={this.addOperation}>6</button></td>
              <td><button className="buttonOperation"  value="*" name="*" onClick={this.addOperation}>*</button></td>
          </tr>
          <tr>
              <td><button className="buttonChiffre" value="7" name="7"onClick={this.addOperation}>7</button></td>
              <td><button className="buttonChiffre" value="8" name="8" onClick={this.addOperation}>8</button></td>
              <td><button className="buttonChiffre" value="9" name="9" onClick={this.addOperation}>9</button></td>
              <td><button className="buttonOperation" value="-" name="-" onClick={this.addOperation}>-</button></td>
          </tr>
          <tr>
            <td colSpan="3"><button class="buttonChiffre" value="0" name="0" onClick={this.addOperation}>0</button></td>
            <td><button class="buttonegle" value="=" name="=" onClick={this.resultat}>=</button></td>
          </tr>
        </table>
      </div>
      
    );
  }
}

export default App;
