import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import quotes, { generateQuotes } from 'reducers/quotes'
import LoaderSpinner from 'components/LoaderSpinner'

const restart = () => {
  document.location.href = '';
}

const Quotes = () => {
  const [isLoading, setLoading] = useState(true)

  const quote = useSelector((store) => store.quotes.quote)
  const history = useSelector((store) => store.quotes.history)

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  }, [])

  const onQuoteRegenerate = (tag) => {
    dispatch(generateQuotes(tag))
  }

  const onQuoteRevert = () => {
    dispatch(quotes.actions.setPreviousQuote())
  }

  return (
    <>
      {isLoading ? <LoaderSpinner />
        : <div className="quote-wrapper">
          <h1>{quote.author}</h1>
          <h2 className="quote-content">"{quote.content}"</h2>
          {quote.tags.map((tag) => (
            <button
              className="btn"
              type="submit"
              key={tag}
              onClick={() => onQuoteRegenerate(tag)}>
              {tag.slice(0, 1).toUpperCase() + tag.slice(1, tag.length)}
            </button>
          ))}
          <button
            className="btn"
            type="button"
            disabled={!history.length}
            onClick={onQuoteRevert}>
              Previous
          </button>
          <button className="restart-btn" onClick={restart} type="button">Restart</button>
        </div>}
    </>
  )
}

export default Quotes