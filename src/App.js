import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

//Class 'App' extends React.Component Library
class App extends Component {
  constructor() {
    // instatiate Constructor
    //This is done to manage the state of a component
    super();

    //Initial state of component
    this.state = {
      monsters: [],
      searchField: ""
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

  //Custom method
  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
 
  // React Component receieves its state(monsters) in an attribute-like form called props
  render() {
    const { monsters, searchField } = this.state;

    // Don't mutate state of parent component because  of unidirectional data flow
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    if (this.state.monsters.length === 0) {
      return <h1 className="text-center">App is Loading...</h1>;
    } else {
      return (
        <div className="App">
          <h1>Monsters Rolodox</h1>
          <SearchBox
            placeholder="Search Monsters"
            handleChange={this.handleChange}
          />

          <CardList monsters={filteredMonsters} />
        </div>
      );
    }
  }
}

export default App;
