const Filter = ({filter, setFilter}) => {

    const handleFilter = (event) => {
        setFilter(event.target.value)
    }

    return(
        <div>
            find countries <input type="text" value={filter} onChange={handleFilter} />
        </div>
    )
}

export default Filter