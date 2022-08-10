import personService from '../services/person';

const Persons = ({persons, setAlteredData}) => {

    const deletePersonEvent = (id, name) => {
        if (window.confirm(`Are you sure to delete ${name}?`)){        
            personService
                .deletep(id)
                .then(reponse => {
                    alert(`${name} was deleted successfully from the server !`)
                    setAlteredData(true)
                })
                .catch( error => {
                    alert(`Something went wrong \n${error}`)
                    if ( error.request.status === 404){
                        alert(`The ${name} information was deleted previusly`);
                    }
                })
        }
    }

    return(
        <div>
            <h3>Contacts</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { persons.map( p => <tr key={p.id} ><td>{p.name}</td><td>{p.number}</td><td><button onClick={() => deletePersonEvent(p.id,p.name)}>delete</button></td></tr> ) } 
                </tbody>
            </table>
            
        </div>
    )    
}

export default Persons