import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

import quotes from './reducers/quotes'
import QuoteGenerator from './components/QuoteGenerator'

const reducer = combineReducers({
  quotes: quotes.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <QuoteGenerator />
    </Provider>
  )
}
