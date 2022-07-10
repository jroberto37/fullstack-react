import "./App.css"

const Course = ({course}) => {
    return(
    <>
        { 
            course.map( (c) => {
                let total = 0
                return(
                    <>
                        <h3>{c.name}</h3>
                        <div className="courseContent">
                            { c.parts.map( (p) => {   
                                total += p.exercises                                                        
                                return(
                                <>
                                    <p key={ p.id }>{ p.name } { p.exercises }</p>
                                </>)
                            } ) }
                            <h3><i>Total of { total } exercises (with a let variable)</i></h3>
                            
                        </div>

                    </>
                )
            })            
        }
        
    </>
    )
}


const App = ({course}) => {
    return(
    <>  
        <Course course={course}/>
    </>
    )
}

export default App