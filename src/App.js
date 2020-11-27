import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person name={person.name} age={person.age} key={person.id}
                    click={() => this.deletePersonHandler(index)}
                    changed={(event) => this.nameChangedHandler(event, person.id )} />
          })

          }
       </div>
      )
    }

    return (
      <div className="App">
       <h1>Hi, I am a React app</h1>  
       <h2>Hello all good now</h2>
       <button style={style} onClick = {this.togglePersons}>Toggle Persons</button>
       {persons}
      </div>
      
    );
  }
}

export default App;
