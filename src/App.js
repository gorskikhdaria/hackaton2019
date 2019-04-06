import React, { Component } from 'react';
import './App.css';
import {MainComponent} from "./components/main.component";

class App extends Component {
  render() {
    return (
      <div style={styles} className='pt-surface__content pt-surface__content--size--xl pt-surface__content--space-v--5xl'>
        <MainComponent/>
      </div>
    );
  }
}

const styles = {
  padding: '0px 50px',
  marginTop: '40px'
};

export default App;
