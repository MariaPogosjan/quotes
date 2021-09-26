import React from 'react'
import { useSelector } from 'react-redux'

import StartScreen from 'components/StartScreen'
import Quotes from 'components/Quotes'

const QuoteGenerator = () => {
  const quote = useSelector((store) => store.quotes.quote)
  const error = useSelector((store) => store.quotes.error)

  return (
    <main>
      {quote ? <Quotes /> : <StartScreen />}
      {error && <div className="error">Please try again</div>}
    </main>
  )
}

export default QuoteGenerator