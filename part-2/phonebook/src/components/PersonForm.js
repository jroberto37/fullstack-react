
const FormPerson = ( { person, setPerson, newName, newNumber, setNewName, setNewNumber } ) => {

    const handleNameChange = ( event ) => {
       setNewName( event.target.value )
    }
    
    const handleNumberChange = ( event ) => {
       setNewNumber( event.target.value )
    }

    const addPerson = ( event ) => {

        event.preventDefault()
        const personObject = {
          id: person.length + 1,
          name: newName,
          number: newNumber
        }
    
        if ( person.find( p =>  JSON.stringify(p) === JSON.stringify(personObject) ) !== undefined ){
          alert(  `${newName} is already added to phonebook`)
          return
        }    
    
        setPerson( person.concat( personObject ) )
    
    }    

    return (
        <form onSubmit={ addPerson }>
        <h2>add a new</h2>
        <div>
          name: <input value={ newName } onChange={ handleNameChange }/>
        </div>
        <div>
          number: <input value={ newNumber } onChange={ handleNumberChange }/>
        </div>        
        <div>
          <button type='submit'>add</button>
        </div>
      </form>        
    )
}

export default FormPerson