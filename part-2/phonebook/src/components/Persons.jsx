
const Persons = ( { person, filter } ) => {

    const filteredPerson = person.filter( p => p.name.toLocaleLowerCase().includes(filter) ).length > 0
        ? person.filter( p => p.name.toLocaleLowerCase().includes(filter) )
        : [{ id:0, name:'', number:'' }]  

    return (
        <div>
            { filteredPerson.map( (p) => <div key = { p.id }> <p> { p.name }  { p.number } </p>  </div> ) }
        </div>        
    )
}


export default Persons