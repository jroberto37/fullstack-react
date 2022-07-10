import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import FormPerson from './components/PersonForm';
import Persons from './components/Persons';

function App() {

  const [person, setPerson] = useState([ { id:1, name: 'Roberto Lomeli', number: '52-33-155' } ])
  const [newName, setNewName] = useState( 'give a new name...' )
  const [newNumber, setNewNumber] = useState( '0-00-000' )
  const [filter, setFilter] = useState( '' )  

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter = { filter } setFilter = { setFilter } />
        <FormPerson person = { person } setPerson = { setPerson } newName = { newName } setNewName = { setNewName } newNumber = { newNumber } setNewNumber = { setNewNumber} />
      <h2>Numbers</h2>
        <Persons person = { person } filter = { filter } />   
    </div>
  );
}

export default App;
