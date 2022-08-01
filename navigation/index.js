import React, { useEffect } from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { connect } from 'react-redux'
import {
  Restaurant,
  OrderDelivery,
  Splash,
  Login,
  Profile,
  Registrasi,
  Community,
  Event
} from '../screens'
import Tabs from './tabs'
import { View, Text, TouchableOpacity } from 'react-native'
const Stack = createStackNavigator()
const StackHome = createStackNavigator()
import { RETRIEVE_PIN } from '../reduxs/actions/action-pin'

function stackTabHome() {
  return (
    <StackHome.Navigator
      screenOptions={{
        headerShown: false
      }}
      initialRouteName={'Home'}
    >
      <StackHome.Screen name="Home" component={Tabs} />
      <StackHome.Screen name="Restaurant" component={Restaurant} />
      <StackHome.Screen name="OrderDelivery" component={OrderDelivery} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registrasi" component={Registrasi} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Community" component={Community} />
      <Stack.Screen name="Event" component={Event} />
    </StackHome.Navigator>
  )
}

const App = props => {
  const { state } = props

  useEffect(() => {
    setTimeout(async () => {
      props.RETRIEVE_PIN()
    }, 2000)
  }, [])
  if (state.pin.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Splash />
      </View>
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {/* <Stack.Screen name="Login" component={Login} /> */}

        <Stack.Screen name="HomeTab" component={stackTabHome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    RETRIEVE_PIN: payload => dispatch(RETRIEVE_PIN(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
