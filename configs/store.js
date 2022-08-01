import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import { reducer } from '../reduxs/reducers'
import rootSaga from '../reduxs/sagas'

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  middleware.push()
}

const store = createStore(reducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store
