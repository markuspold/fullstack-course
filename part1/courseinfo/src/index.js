import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <h1>{props.title}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  )
}

const Content = (props) => {
  let parts = props.parts.map((item) =>
    <Part name = {item.name} exercises = {item.exercises}/>
  );

  return(
    <div>
      {parts}
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
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
    }
  ]

  console.log(parts[0]);
  
  
  return (
    <div>
      <Header title = {course}/>
      <Content parts = {parts}/>
      <Total parts = {parts}/>
    </div>
  )
}

ReactDOM.render(<App/>, document.getElementById('root'))