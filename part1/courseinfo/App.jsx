const Content = ({course}) => {
  return (
    <div>
      {/* Use map method */}
      {course.parts.map((part, index) => (
        <Part key={index} name = {part.name} exercises = {part.exercises}></Part>
      ))}
    </div>
  )
}
const Part = ({name, exercises}) => {
  return (
    <p>
      {name} {exercises}
    </p>
  )
}
const Header = ({course}) => {
  return (
    <h1>{course.name}</h1>
  )
}
const Total = ({course}) => {
  const total = course.parts.reduce((acc, curr) => {
    acc += curr.exercises
    return acc
  }, 0)
  return (
    // Use reduce method 
    <div>Number of exercises {total}</div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
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
  }
  return (
    <div>
      <Header course={course}></Header>
      <Content course = {course}/>
      <Total course={course}> </Total>
    </div>
  )
}

export default App