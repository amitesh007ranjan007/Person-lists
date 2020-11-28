import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Persons/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons :   [{ 
      id: 'dfvb',
      name: 'Amitesh',
      age: 26
    }, {
      id: 'aswdf',
      name: 'Atharv',
      age: 3
    }, {
      id: 'hgfd',
      name: 'Mummy',
      age: 50
    }],

    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons})

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((person) => {
      return person.id === id 
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })

  }
  
  togglePersons = () => {
    this.setState({showPersons: !this.state.showPersons})
  }
  render() {
    let persons = null
    

    if (this.state.showPersons) {
      persons = 
          <Persons persons = {this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
           />

    }

    return (

       <div className={classes.App}>
        <Cockpit 
         title={this.props.appTitle}
         showPersons={this.state.showPersons}
         persons={this.state.persons}
         clicked={this.togglePersons}
        />
       {persons}
      </div> 
    );
  }
}

export default App;
