import { useState } from "react";

const Display = ( props ) => {
    return (
        <>
            <p>{ props.counter }</p>
        </>
    )
}

const Button = ({onClick, text}) => {
    return(
        <>
            <button onClick={ onClick }> { text } </button>
        </>
    )
}

const App = () => {
   const [counter, setCounter] = useState( 0 ) ;

   const increaseByOne = () => setCounter( counter + 1 )
   const decreaseByOne = () => setCounter( counter - 1 )
   const setZero = () => setCounter( 0 );

    return (
        <>
           <p>Our accountant is in: </p> <Display counter = { counter }/>
        
            <div>
                <button onClick={ increaseByOne }> plus </button>
                <button onClick={ () => setZero() }> reset </button>
                <button onClick={ decreaseByOne }> decrease </button>
            </div>

            <div>
                <Button onClick = { increaseByOne } text = " + " />
                <Button onClick = { setZero } text = " zero " />
                <Button onClick = { decreaseByOne } text = " decrease " />
            </div>
        </>
    )

}

export default App