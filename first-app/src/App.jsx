import React, { useState } from 'react'
import Select from './components/Select'
import Input from './components/Input'
import { units } from './units'

function App() {
  const [result, setResult] = useState(0)
  const [amount, setAmount] = useState(0)

  const handleChange = (event) => {
    event.preventDefault()
    setAmount(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault();
    setResult(
      amount * document.getElementById('From-select').value / document.getElementById('To-select').value
    )

  }

  return (
    <>
      <div className="converter-form">
        <Input label="Amount" onChange={handleChange} />
        <div className="row">
          <Select label="From" items={units} />
          <Select label="To" items={units} />
          <button onClick={handleClick}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  )
}

export default App
