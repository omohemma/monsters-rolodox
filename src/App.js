import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

//Class 'App' extends React.Component Library
class App extends Component {
  constructor() {
    // instatiate Constructor
    //This is done to manage the state of a component
    super();

    //Initial state of component
    this.state = {
      monsters: []
    };
  }

  //When page mount on the DOM [Lifecycle Hooks]
  componentDidMount() {
    /*Consume Extrenal APIs using fetch method
      Format promise into JSON
      Update state of monster with response from APIs using setState Fuction 
      which mutates initialized state
     */
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  // React Component receieves its state(monsters) in an attribue-like form called props
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters} />>
      </div>
    );
  }
}

export default App;
