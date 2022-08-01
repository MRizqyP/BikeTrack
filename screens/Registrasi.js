import React, { useState, useEffect, Component } from 'react'

import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  Platform,
  TextInput,
  TouchableOpacity,
  StatusBar
} from 'react-native'
import Feather from 'react-native-vector-icons/Feather'
import Button from '../components/Button'
// import styles from './styles'
import FormInput from '../components/FormInput'
import { connect } from 'react-redux'
import { AUTH_USER_SUCCESS } from '../reduxs/actions/action-auth'
import { icons, images, SIZES, COLORS, FONTS } from '../constants'

// import Geolocation from '@react-native-community/geolocation';
class Registrasi extends Component {
  state = {
    email: '',
    password: '',
    secureTextEntry: false,
    token: ''
  }

  constructor(props) {
    super(props)
  }

  onSuccess = () => {
    const { navigation } = this.props
    navigation.goBack()
  }
  updateSecureTextEntry = () => {
    setForm({
      ...form,
      secureTextEntry: !form.secureTextEntry
    })
  }

  render() {
    var screenWidth = Dimensions.get('window').width
    var screenHeight = Dimensions.get('window').height

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#43ABA4" barStyle={'default'} />
        <View style={styles.header}>
          <Text style={{ fontWeight: '800', fontSize: 26 }}>REGISTRASI</Text>
        </View>
        <View
          style={{
            marginLeft: 28,
            marginRight: 28
          }}
        >
          <View>
            <Text>Email</Text>
            <View style={styles.action}>
              <Feather name="user" color="orange" size={20} />
              <FormInput
                placeholder="Masukan email Anda"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({ ...this.state, email: text })
                }
              />
            </View>
          </View>
          <View>
            <Text>No Telepon</Text>
            <View style={styles.action}>
              <Feather name="inbox" color="orange" size={20} />
              <FormInput
                placeholder="Masukan no telp Anda"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({ ...this.state, email: text })
                }
              />
            </View>
          </View>
          <View>
            <Text>NIK</Text>
            <View style={styles.action}>
              <Feather name="credit-card" color="orange" size={20} />
              <FormInput
                placeholder="Masukan NIK Anda"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                onChangeText={text =>
                  this.setState({ ...this.state, email: text })
                }
              />
            </View>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text>Kata Sandi</Text>
            <View
              // style={state.login.isError ? styles.actionError : styles.action}
              style={styles.action}
            >
              <Feather name="lock" color="orange" size={20} />
              <FormInput
                placeholder="Masukan kata sandi anda"
                placeholderTextColor="#666666"
                autoCapitalize="none"
                secureTextEntry={this.state.secureTextEntry ? false : true}
                onChangeText={text =>
                  this.setState({ ...this.state, password: text })
                }
              />
              <TouchableOpacity onPress={() => this.updateSecureTextEntry}>
                {!this.state.secureTextEntry ? (
                  <Feather name="eye-off" color="orange" size={20} />
                ) : (
                  <Feather name="eye" color="orange" size={20} />
                )}
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack()
              }}
            >
              <Text style={[{ color: '#F18A04' }]}>Sudah Punya Account?</Text>
            </TouchableOpacity>
          </View>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Button
              // onPress={() => navigation.navigate('DashboardSP')}
              onPress={this.onSuccess}
              text={'Daftar'}
            />
          </View>
        </View>

        <ImageBackground
          style={{
            width: screenWidth,
            height: screenHeight / 4,
            justifyContent: 'flex-end'
          }}
          source={images.backgroundlogin}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageCover: {
    resizeMode: 'cover',
    flex: 1
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  errorMessage: {
    marginTop: 30,
    backgroundColor: 'rgba(224,32,32,0.08)',
    padding: 8,
    flexDirection: 'row'
  },
  textError: {
    color: 'red',
    fontSize: 12,
    marginLeft: 8
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D8D8D8',
    paddingBottom: 5
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E02020',
    paddingBottom: 5
  }
})
const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AUTH_USER_SUCCESS: payload => dispatch(AUTH_USER_SUCCESS(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Registrasi)
// export default Login
