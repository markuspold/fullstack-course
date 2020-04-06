import React from 'react';
import ReactDOM from 'react-dom';


const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, is it correct that you are {props.age} years old?</p>
    </div>
  )
}

const App = () => {
  const name = 'Markus'
  const age = 24
  
  return (
    <>
      <h1>Greetings</h1>
      <Hello name = "Timo" age = {25}/>
      <Hello name = {name} age = {age}/>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
