//import ArraysMe from "./javascript-bases/arrays"
//import ObjectMe from "./javascript-bases/objects"
//import Variables from "./javascript-bases/variables"


const Header = (props) => {
    return (
        <>
            <h1> {props.course} </h1>
        </>
    )
}


const Part = (props) => {
    return(
    <>
        <p> {props.part} {props.exercises} </p>
    </>
    )
}

const Content = ({parts}) => {    
    return(
        <>
        
            <Part part={parts[0].name} exercises={parts[0].exercises}/>
            <Part part={parts[1].name} exercises={parts[1].exercises}/>
            <Part part={parts[2].name} exercises={parts[2].exercises}/>
        </>
    )
}

const Total = ({parts}) => {
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
    return (
        <>
            <p>Total exercises is  {total}</p>
        </>
    )
}

const App = () => {
    //Variables()
    //ArraysMe()
    //ObjectMe()
    const course = 'Half Stack application development'
    /*
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14  
    }*/
    const parts = [{
        name: 'Fundamentals of React',
        exercises: 10
    },
    {
        name: 'Using props to pass data',
        exercises: 7
    },
    {
        name: 'State of a component',
        exercises: 14  
    }]
    return (
        <div>
            <Header course = {course} />
            <Content parts = {parts} />
            <Total parts= {parts}/>
        </div>
    )

}

export default App;