import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import quotes, { generateQuotes } from 'reducers/quotes'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')

  const dispatch = useDispatch()

  const onQuoteChange = (e) => {
    e.preventDefault()
    if (inputValue !== '') {
      dispatch(quotes.actions.setAuthor(inputValue))
      dispatch(generateQuotes())
      setInputValue('')
    }
  }

  return (
    <form onSubmit={onQuoteChange}>
      <h1>Who is you favorite Quote Machine?</h1>
      <input
        className="form-input"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} />
      <button className="form-btn" type="submit">Start</button>
    </form>
  )
}

export default StartScreen