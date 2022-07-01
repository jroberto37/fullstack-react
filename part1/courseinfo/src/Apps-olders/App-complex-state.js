import { useState } from "react";





const App = () => {
    
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    

    //Single useState with objects
    const [ clicks, setClicks ] = useState({
        left: 0,
        right: 0
    })


    //To use Object spread
    const [clicks2, setClicks2] = useState({
        left: 0,
        right: 0
    })


    return (
        <>
            <div>
                { left }
                <button onClick={ ()=> setLeft( left + 1) }> left </button>
                <button onClick={ () => setRight( right + 1) }> right </button>
                { right }
            </div>
            <div>
                { clicks.left }
                <button onClick={ ()=> setClicks( { left: clicks.left += 1, right:clicks.right = clicks.right}) }> left </button>
                <button onClick={ () => setClicks({ left: clicks.left, right: clicks.right + 1 }) }> right </button>
                { clicks.right }
            </div>    
            <div>
                { clicks2.left }
                <button onClick={ ()=> setClicks2( { left: clicks2.left += 1, ...clicks2}) }> left object spread </button>
                <button onClick={ () => setClicks2({ ...clicks2, right: clicks2.right + 1 }) }> right object spread</button>
                { clicks2.right }
            </div>                     
        </>
    )
}

export default App