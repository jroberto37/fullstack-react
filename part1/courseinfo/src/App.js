import { useState } from "react";


const History = ({ allClicks }) => {
    if ( allClicks.length === 0 )  {
        return(
            <div>
                <p> the app is used by pressing the buttons </p>
            </div>
        )
    }
    
    return(
        <div>
            <p> button press history: { allClicks.join(' ') }</p>
        </div>
    )
}

const Button = () => {
    
}


const App = () => {

    const [ left, setLeft ] = useState(0)
    const [ right, setRight ] = useState(0)
    const [ allClicks, setAll ] = useState([])

    const handleLeftClick = () => {
        setLeft( left + 1 )
        setAll( allClicks.concat('L') )
    }

    const handleRightClick = () => {
        setRight( right + 1 )
        setAll( allClicks.concat('R') )
    }


    return(
        <>
            { left }
            <button onClick={ handleLeftClick }> left </button>
            <button onClick={ () => handleRightClick() }> right </button>
            { right }
            <p>{ /* allClicks.join(' ') */}</p>
            <History allClicks={ allClicks }/>
        </>
    )


}

export default App