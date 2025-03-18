import { useState } from 'react'

const getRandom = (num) => Math.floor(Math.random() * num)
const Button = ({handleClick, text}) => {
  return(
    <button onClick={handleClick}>{text}</button>
  )
}
const Header = ({text}) => {
  return(
    <h2>{text}</h2>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  // TO DO pick one with the most votes 
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [maxIndex, setMaxIndex] = useState(0)
  const handleVoteClick = () => {
    const newVotes =  [...votes]
    newVotes[selected] += 1;
    setVotes(newVotes)
    const maX = newVotes.reduce((acc, curr) => {
      acc = Math.max(acc, curr)
      return acc
    }, 0)
    console.log(maX, ' <- Max Votes')
    setMaxIndex(newVotes.indexOf(maX))
    console.log(votes)
    console.log(maxIndex)
  }

  return (
    <div>
      <Header text={"Anecdote of the day"}></Header>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <Button handleClick={handleVoteClick} text={"vote"}></Button>
      <Button handleClick={() => setSelected(getRandom(anecdotes.length))} text={"next anecdote"}></Button>
      <Header text={"Anecdote with most votes"}></Header>
      <div>{anecdotes[maxIndex]}</div>
    </div>
  )
}

export default App 