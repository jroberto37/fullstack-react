//import ArraysMe from "./javascript-bases/arrays"
//import ObjectMe from "./javascript-bases/objects"
//import Variables from "./javascript-bases/variables"


const Hello = ({name, age}) => {
    /*
    const bornYear = () => {
        const yearNow = new Date().getFullYear()
        return yearNow - props.age
    }*/

    const bornYear = () => new Date().getFullYear() - age

    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
            </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}

const App = () => {
    const name = 'Roberto'
    const age = 37

    return(
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10}/>
            <Hello name={name} age={age}/>
        </div>
        
    )

}

export default App;