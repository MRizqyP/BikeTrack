import Router from './navigation/index'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import React, { Component } from 'react'
import store from './configs/store'

function Main() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}

export default Main
