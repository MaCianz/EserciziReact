import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };

  }

  aumenta = () => {
    this.setState({ clicks: this.state.clicks + 1 });
    console.log(this.state.clicks+1);
  }
  diminuisci = () => {
    this.setState({ clicks: this.state.clicks - 1 });
    console.log(this.state.clicks+1);
  }
  render() {
    return (
      <div>
        <button onClick={this.aumenta}>Incrementalo</button>
        <button onClick={this.diminuisci}>Decrementalo</button>
        <h2>Clickz = { this.state.clicks }</h2>
      </div>
    );
  }
}

export default App;
