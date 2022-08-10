import {useState, useEffect } from 'react';
import './App.css';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Filter from './components/Filter';
import personService from './services/person';



function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [persons, setPersons] = useState([]);
  const [filter, setFilter] = useState('');
  const [alteredData, setAlteredData] = useState(false)

  //Geting data from a server

  /*
  const data = () => { 
    axios
    .get('http://localhost:3001/persons')
    .then( response => {
      setPersons(response.data)
    })
    .catch( e => {
      console.log('An error happend ' , e)
    })
  }

  //Effects-hooks
  useEffect(data, []);
*/

//Getting data from server

useEffect( () => {
  personService
  .getAll()
  .then( initialList => setPersons(initialList))
},[])

if ( alteredData ){  
  personService
  .getAll()
  .then( 
    initialList => {
      setPersons(initialList)
      setAlteredData(false)
    }
  )

}

 

const filteredPerson = persons.filter( p => p.name.toLocaleLowerCase().includes(filter) ).length > 0
  ? persons.filter( p => p.name.toLocaleLowerCase().includes(filter) )
  : [{ id:0, name:'', number:'' }]  


  return (
    <div className='canvas'>
      <PersonForm 
      name={name} setName={setName} number={number} setNumber={setNumber}
      persons = {persons} setPersons = {setPersons} setAlteredData = {setAlteredData}
      />
      <Filter filter={filter} setFilter={setFilter}/>
      <Persons persons = {filteredPerson} setAlteredData = {setAlteredData}/>
    </div>
  );
}

export default App;
