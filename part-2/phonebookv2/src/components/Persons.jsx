const Persons = ({persons}) => {
    return(
        <div>
            <h3>Contacts</h3>
            { persons.map( p => <div key={p.id} >{p.name}, {p.number}</div> ) }
        </div>
    )    
}

export default Persons