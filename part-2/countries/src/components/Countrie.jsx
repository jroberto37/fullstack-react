import Weather from "./Weather"

const Countrie = ({countrie, setCountries}) => {

    const handlePickCountrie = (ccn3) => {
        setCountries(countrie.filter( c => c.ccn3 === ccn3))
    }

    //if ( countrie.length !== 1 ){
    if (countrie.length > 1 && countrie.length < 11){
        return (<>
            <h3>Countries matches</h3>
            <div>
                { countrie.map( c => <div key={c.ccn3}>{c.name.common} <button onClick={() => handlePickCountrie(c.ccn3)}>explore</button></div>)}
            </div>
        </>)
    }else if (countrie.length > 10){
        return(<></>)
    }

    return(
        <>
            { countrie.map( c => {
                return(
                    <div key={c.ccn3}>
                        <h3>Countrie info</h3>
                        <div>Official name: {c.name.official} </div>
                        <div>
                            <p>Languages:</p>
                            <ul>
                                { Object.values(c.languages).map( l => <li key={l}>{l}</li>)}
                            </ul>                            
                        </div>
                        <div><img src={c.flags.png} width="150" height="100"/></div>
                        <Weather countrie={c}/>
                    </div>
                )
                })
            }
        </>
    )
}

export default Countrie