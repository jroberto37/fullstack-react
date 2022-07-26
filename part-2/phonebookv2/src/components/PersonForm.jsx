const PersonForm = ({name, setName, number, setNumber, persons, setPersons}) => {
    const addPerson = (event) => {
        event.preventDefault()
        const person = {
            id: persons.length + 1,
            name: name,
            number: number
        }
        setPersons(persons.concat(person))

    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleNumber = (event) => {
        setNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson}>
            <h3>Person resgitration</h3>
            <div>
                give a name <input type="text" value = {name} onChange = {handleName} />
            </div>
            <div> 
                give a number <input type="text" value={number} onChange={handleNumber}/>
            </div>
            <div>
                <button type="submit">save</button>
            </div>
        </form>
    )
}

export default PersonForm