import { fork, all } from 'redux-saga/effects'

import { counterSagaToken } from './login'
// import { counterSagaPIN } from './pin'
// import { counterSagaProfile } from './profile'
// import { counterSagaCategory } from './category'
// import { counterSagaCustomer } from './customer'

export default function* rootSaga() {
  yield all([
    ...counterSagaToken
    // ...counterSagaPIN,
    // ...counterSagaProfile,
    // ...counterSagaCategory,
    // ...counterSagaCustomer
  ])
}
