
const Filter = ({filter, setFilter}) => {

    const handleFilter = (event) => {
        setFilter(event.target.value)
    } 
    return(
        <div>
            <h3>Filter</h3>
            <div>
                Filter
                <input type="text" value={filter} onChange={handleFilter}/>
            </div>
        </div>
    )

}

export default Filter