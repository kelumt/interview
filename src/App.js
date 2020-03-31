import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Calculator from "./components/calculator/Calculator";

class App extends Component {

  constructor() {
    super();

    this.state = {
      display: "",
      result: ""
    }

    this.numInput = this.numInput.bind(this);
    this.operInput = this.operInput.bind(this);
    //this.calculate = this.calculate.bind(this);
    this.isOPerator = this.isOPerator.bind(this);
    this.clear = this.clear.bind(this);
    this.delete = this.delete.bind(this);
  }

  numInput(e) {
    let currentDisplay = this.state.display;
    let newDisplay = currentDisplay + e.currentTarget.value;

    this.setState({
      display: newDisplay
    });

  }

  clear(e) {
    this.setState({
      display: "",
      result: ""
    });

  }

  delete(e) {
    let currentDisplay = this.state.display;
    let newDisplay = currentDisplay;

    if (currentDisplay !== "") {
      newDisplay = currentDisplay.substring(0, (newDisplay.length - 1));
    }

    this.setState({
      display: newDisplay,
      result: ""
    });

  }

  isOPerator(value) {
    if (value != null && value !== "") {
      return ["+", "-", "*", "/"].indexOf(value) !== -1;
    }
  }

  operInput(e) {
    let currentDisplay = this.state.display;
    let newDisplay = currentDisplay;
    let selectedOPerator = e.currentTarget.value;

    if (currentDisplay !== "") {
      let lastCharacter = currentDisplay.slice(-1);

      //console.log('lastCharacter = ' + lastCharacter + ' is an operator ? ' + this.isOPerator(lastCharacter))

      if (this.isOPerator(lastCharacter)) {

        if (["(", ")"].indexOf(selectedOPerator) !== -1) {
          newDisplay += selectedOPerator;
        } else {
          //replace the last character by new operator
          newDisplay = (newDisplay.substring(0, (newDisplay.length - 1)) + selectedOPerator);
        }


      } else {
        newDisplay += selectedOPerator;
      }

    }

    this.setState({
      display: newDisplay
    });

  }

  



  //console.log(yard('3 + 4 * 5 / (3 + 2)'));
  //console.log(rpn(yard('3 + 4 * 5 / (3 + 2)')));

  render() {
    return (
      <div className="app">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              Calculator
              </Typography>
          </Toolbar>
        </AppBar>

        <Calculator />

      </div>

    );
  }

}

export default App;
