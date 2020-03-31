import React, { Component } from 'react';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Calculator from "./components/calculator/Calculator";

class App extends Component {

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
