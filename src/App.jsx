import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
const animals = ['dog', 'cat', 'rabbit', 'hamster', 'skunk', 'goldfish', 'bird', 'ferret', 'turtle', 'sugar glider', 'chinchilla', 'hedgehog', 'hermit crab', 'gerbil', 'pygmy goat', 'chicken', 'capybara', 'teacup pig', 'serval', 'salamander', 'frog']
const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
return (
  <div >
    <h1 className='text-3xl'>Animals:</h1>
    <ul>
      {animalsList}
    </ul>
  </div>
);
}

export default App
