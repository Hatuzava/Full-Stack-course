import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>{text}</button>
    )
}
const Heading = ({text}) => {
    return (
        <h2>{text}</h2>
    )
}
const StatisticLine = ({text, val}) => {
    return (
      <tr>
        <td>
          {text} 
        </td>
        <td>
          {val}
        </td>
      </tr>
    )
}
const Statistics = ({good, neutral, bad}) => {
  const total = bad + neutral + good;
  const average = total ? (good - bad) / total : 0;
  const positive = total ? (good * 100) / total : 0;
  if (total) {
    return (
      <div>
        <Heading text = {"statistics"}></Heading>
        <table>
          <tbody>
            <StatisticLine text = {"good"} val = {good}></StatisticLine>
            <StatisticLine text = {"neutral"} val = {neutral}></StatisticLine>
            <StatisticLine text = {"bad"} val = {bad}></StatisticLine>
            <StatisticLine text = {"all"} val = {total}></StatisticLine>
            <StatisticLine text = {"average"} val = {average.toFixed(1)}></StatisticLine>
            <StatisticLine text = {"positive"} val = {positive.toFixed(1) + " %"}></StatisticLine>
          </tbody>
        </table>
      </div>
    )
  } 
  return (
    <div>
      <Heading text = {"statistics"}></Heading>
      <p>No feedback given</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
        <Heading text = {"give feedback"}></Heading>
        <Button handleClick={() => setGood(n => n + 1)} text={"good"}></Button>
        <Button handleClick={() => setNeutral(n => n + 1)} text={"neutral"}></Button>
        <Button handleClick={() => setBad(n => n + 1)} text={"bad"}></Button>
        <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App