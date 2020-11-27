import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'green',
        color: 'black'
      }
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = []

    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }

    return (
      <div className="App">
       <h1>Hi, I am a React app</h1>  
       <p className={classes.join(' ')}>Hello all good now</p>
       <button style={style} onClick = {this.togglePersons}>Toggle Persons</button>
       {persons}
      </div>
      
    );
  }
}

export default Radium(App);
