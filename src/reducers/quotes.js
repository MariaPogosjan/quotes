import { createSlice } from '@reduxjs/toolkit'

const quotes = createSlice({
  name: 'quotes',
  initialState: {
    author: null,
    quote: null,
    history: [],
    error: null
  },
  reducers: {
    setAuthor: (store, actions) => {
      store.author = actions.payload
    },
    setQuote: (store, actions) => {
      if (store.quote !== null) {
        store.history = [...store.history, store.quote]
      }
      store.quote = actions.payload
    },
    setPreviousQuote: (store) => {
      if (store.history.length > 0) {
        store.quote = store.history[store.history.length - 1]
        store.history = store.history.slice(0, store.history.length - 1)
      }
    },
    setError: (store, actions) => {
      store.error = actions.payload
    }
  }
})

export default quotes

export const generateQuotes = (tag) => {
  return (dispatch, getState) => {
    if (tag) {
      fetch(`https://api.quotable.io/random?author=${getState().quotes.author}&tags=${tag}`)
        .then((res) => {
          if (res.ok) {
            dispatch(quotes.actions.setError(null))
            return res.json()
          } else {
            throw new Error(res.statusText)
          }
        })
        .then((data) => {
          dispatch(quotes.actions.setQuote(data))
        })
        .catch((error) => dispatch(quotes.actions.setError(error.message)))
    } else {
      fetch(`https://api.quotable.io/random?author=${getState().quotes.author}`)
        .then((res) => {
          if (res.ok) {
            dispatch(quotes.actions.setError(null))
            return res.json()
          } else {
            throw new Error(res.statusText)
          }
        })
        .then((data) => {
          dispatch(quotes.actions.setQuote(data))
        })
        .catch((error) => dispatch(quotes.actions.setError(error.message)))
    }
  }
}