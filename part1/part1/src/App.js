
import React from "react";

//JavaScript mode
/*
function App() {
  return (
    <div>
      <p>Hello world</p>
    </div>
  );
}
*/

//Dynamic render component
/*
const App = () => {
  const now = Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <p>Helo world, it  si { now.toString() }</p>
      <p> { a } plus { b } is { a + b }</p>
    </div>
  );
}
*/

//React mode JSX
/*
const App = () => {
  const now = Date();
  const a = 10;
  const b = 20;
  return React.createElement (
    
      'div',
      null,
      React.createElement(
        'p', null, 'Hello world, it is', now.toString()
      ),
      React.createElement(
        'p', null, a, ' plus ', b, ' is ' , a + b
      )
    
  );
}
*/

//Multiple components

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, your are {props.age} years old</p>
    </div>
  )
};

const Footer = () => {
  return (
    <div>
        Greeting app created by <a href="https://github.com/jroberto37/fullstack-react" target="blank_">Roberto Lomeli</a>
    </div>
  )
};

const App = () => {
  const age = 25;
  return (
    <>
      <h1>Greetings</h1>
      <Hello name="Roberto" age={37}/>
      <Hello name="Juan" age={age}/>
      <Footer />
    </>
  );
};






export default App;
