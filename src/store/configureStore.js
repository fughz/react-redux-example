import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import comment from '../reducers/comment'

export default function configureStore(history, initialState) {

  const reducer = combineReducers({
    comment,
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        createLogger()
      )
    )
  )

  return store;
}
