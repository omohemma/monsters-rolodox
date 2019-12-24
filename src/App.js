import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

class App extends Component {
  constructor() {
    // instatiate Constructor
    super();

    //Initial state of component
    this.state = {
      monsters: []
    };
  }

  //When page mount on the DOM

  componentDidMount() {
    /*Consume Extrenal APIs
      Format promise int JSON
      Update state of monster with response from APIs
     */
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    return (
      <div className="App">
        <CardList monsters = {this.state.monsters}/>>
      </div>
    );
  }
}

export default App;
