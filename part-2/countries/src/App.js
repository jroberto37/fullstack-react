import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Countrie from './components/Countrie';
import Filter from './components/Filter';

function App() {

  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const hook = () => {
                    axios
                      .get('https://restcountries.com/v3.1/all')
                      .then( (response) => {
                        setCountries(response.data)
                      } )
                      .catch( (e) => {
                        console.log('Something goes wrong ->', e)
                      })
                    }

 useEffect(hook, []);

  let message = 'Getting data from Countries server, please wait ....'
  if ( countries.length >= 250 ){
    message = `Data is ready, we have ${countries.length} countries`
  }

  const filteredCountries = 
    countries.filter( c => c.name.common.toLocaleLowerCase().includes(filter) ).length > 0
    ? countries.filter( c => c.name.common.toLocaleLowerCase().includes(filter) )
    : []

 let messageFilter = ''

 if (filteredCountries.length == 1){
  messageFilter = `We find your countrie`
 }else if(filteredCountries.length > 1 && filteredCountries.length < 250){
  messageFilter = `You need to be more specific. Found countries ${filteredCountries.length}`
 }else{
  messageFilter = ''
 }

  return(
    <>
      <div>
        <h3>Data info from server</h3>
        <p>{message}</p>
      </div>    
      <Filter filter={filter} setFilter={setFilter} />
      <p> <b><i>{messageFilter}</i></b></p>
      <div>
        <h3><i>filter result</i></h3>
        <Countrie countrie={filteredCountries} setCountries={setCountries} />
      </div>
      
    </>
  )
}

export default App;
