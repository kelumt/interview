import React from 'react'

import ButtonPanel from "./ButtonPanel";
import DisplayPanel from "./DisplayPanel";
import CalculatorService from "./../../services/CalculatorService";

class Calculator extends React.Component {

  constructor() {
    super();

    this.state = {
      display: "",
      result: ""
    }

    this.inputNumber = this.inputNumber.bind(this);
    this.inputOperator = this.inputOperator.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  inputNumber(e) {

    let currentDisplay = this.state.display;
    let newDisplay = currentDisplay + e.currentTarget.value;

    this.setState({
      display: newDisplay
    });

  }

  inputOperator(e) {

    let currentDisplay = this.state.display;
    let newDisplay = currentDisplay;
    let selectedOPerator = e.currentTarget.value;

    if (currentDisplay !== "") {
      let lastCharacter = currentDisplay.slice(-1);

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

  clearInput(e) {
    this.setState({
      display: "",
      result: ""
    });

  }

  deleteInput(e) {
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

  calculate(e) {
    let currentDisplay = this.state.display;
    const calculatorService = new CalculatorService();
    let answer = calculatorService.calculate(currentDisplay);
    answer = (!isNaN(answer) ? answer : "Invalid Expresion");

    this.setState({
      display: currentDisplay,
      result: answer
    });

  }


  render() {
    return (
      <div className="calc">
        <ButtonPanel onNumberBtnClick={this.inputNumber} onOperatorBtnClick={this.inputOperator} onDeleteBtnClick={this.deleteInput} onClearBtnClick={this.clearInput} onGoBtnClick={this.calculate} />
        <DisplayPanel expression={this.state.display} answer={this.state.result} />
      </div>
    )
  }
}

export default Calculator;