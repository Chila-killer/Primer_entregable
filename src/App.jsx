import { useState } from 'react'
import './App.css'
import quotes from './db/quotes.json'
import { getRandomElement } from './utilities/random'
import Card from './components/card'

const backgrounds = ["bg1", "bg2", "bg3", "bg4"]

function App() { 
  const [quote, setQuote] = useState(getRandomElement(quotes))
  const [currentBg, setCurrentBg] = useState(getRandomElement(backgrounds))

  const handleChange = () => {
    setQuote(getRandomElement(quotes))
    setCurrentBg(getRandomElement(backgrounds))
  }

  return (
    <main className={`main ${currentBg}`}>
       <Card quote={quote} handleChange={handleChange}/>
    </main>
  )
}

export default App
