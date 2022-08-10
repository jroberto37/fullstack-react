import personService from "../services/person"


const PersonForm = ({name, setName, number, setNumber, persons, setPersons, setAlteredData}) => {
    const addPerson = (event) => {
        event.preventDefault()        
        let person = {
            id: Math.max(persons.map(p => p.id))+1, //Getting the most high value of the array
            name: name,
            number: number
        }

        const oldInfoPerson = persons.find( p => p.name === person.name)

        if (oldInfoPerson !== undefined){
            const resp = window.confirm("The person already exist, Do you want to update their data?")
            if (resp){
                person.id = oldInfoPerson.id
                personService
                    .update(person.id, person)
                    .then( response => {
                        alert(`The ${response.name}'s info was update`)
                        setAlteredData(true)
                    })
                    .catch(error => {
                        alert(`Something went wrong when we treid to update data on the server.\n${error}\n\n${error.request.response}`)
                        console.log(error);
                    })

            }
        }else {
            
            personService
                .create(person)
                .then( response => {
                    alert(`The contact was created successfully`)
                    setPersons(persons.concat(response))
                }).catch( error => {
                    alert(`Something went wrong when we treid to update data on the server.\n${error}\n\n${error.request.response}`)
                })
        }

    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleNumber = (event) => {
        setNumber(event.target.value)
    }

    return (
        <form onSubmit={addPerson} className="form">
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