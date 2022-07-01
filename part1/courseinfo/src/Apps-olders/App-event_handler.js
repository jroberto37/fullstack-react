import { useState } from "react";



const App = (props) => {
    
    const [counter, setCounter] = useState(0);


    const handleClick = () => {
        console.log('clicked')
    }

    /*
    setTimeout(
        () => setCounter(counter + 1),
        1000
    )
    */
    console.log('rendering...', counter)

    return(
        <>
            <div>
                {counter}           
            </div>
            <button onClick={handleClick}>
                plus
            </button>
            <button onClick={ () => console.log('clicekd')}>
                plus 2
            </button>
            <button onClick={ () => setCounter(counter + 1)}>
                add counter
            </button>
        </>
    )
}

export default App;