import React, { useEffect, Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from 'react-native'

import { icons, images, SIZES, COLORS, FONTS } from '../constants'
// import jwt_decode from 'jwt-decode';
import Dashed from '../components/LineDashed'
import Button from '../components/Button'
import { connect } from 'react-redux'
import { AUTH_LOGOUT } from '../reduxs/actions/action-auth'
class Profile extends Component {
  render() {
    const { state, actions, navigation } = this.props

    // const logout = async () => {
    //   actions.LOGOUT();
    // };

    // useEffect(() => {
    //   actions.GET_USER_PROFILE({token: state.login.userToken});
    // }, []);

    var screenWidth = Dimensions.get('window').width
    var screenHeight = Dimensions.get('window').height / 2
    return (
      <>
        <ScrollView style={styles.container}>
          <Image
            source={images.backgroundprofile}
            style={{
              width: screenWidth,
              height: screenHeight,
              position: 'absolute'
            }}
          />

          <View style={styles.header}>
            <View
              style={{
                width: 98,
                height: 98,
                borderRadius: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                elevation: 3
              }}
            >
              {/* <Image
                source={images.icon4}
                style={{ width: 90, height: 90, borderRadius: 50 }}
              /> */}
            </View>

            <Text style={[styles.textName, { marginTop: 15 }]}>
              Test
              {/* {state.profile.user.firstName} {state.profile.user.lastName} */}
            </Text>
            <Text style={[styles.textSub, { marginTop: 15 }]}>
              {/* {state.profile.user.role} */}
            </Text>
          </View>
          <View style={styles.boxInfo}>
            <View style={{ padding: 20 }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={styles.textTitle}>NIK</Text>
                <Text style={styles.textsubTitle}>1230920392</Text>
              </View>
              <Dashed />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10
                }}
              >
                <Text style={styles.textTitle}>Email</Text>
                <Text style={styles.textsubTitle}>testing@gmail.com</Text>
              </View>
              <Dashed />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10
                }}
              >
                <Text style={styles.textTitle}>No.Telepon</Text>
                <Text style={styles.textsubTitle}>082218456868</Text>
              </View>
              <Dashed />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginTop: 10
                }}
              >
                <Text style={styles.textTitle}>Event yang telah diikuti</Text>
                <Text style={styles.textsubTitle}>2</Text>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 20
            }}
          >
            <Button
              text={'Keluar'}
              onPress={() => {
                this.props.AUTH_LOGOUT()
                // navigation.navigate('LoginScreen')
              }}
              backgroundColor={'red'}
            />
          </View>
        </ScrollView>
      </>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 10,
    width: Dimensions.get('window').width,
    height: 260,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  textSub: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '200'
  },
  boxInfo: {
    // width: 320,
    // height: 240,
    backgroundColor: 'white',
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 8,
    elevation: 3
  },
  line: {
    marginTop: 10,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 0.1,
    borderColor: 'grey'
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  textsubTitle: {
    fontSize: 13,
    color: '#121212',
    fontWeight: '200'
  },
  buttonMasuk: {
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 25,
    width: 300,
    height: 45,
    backgroundColor: 'red',
    borderRadius: 8,
    elevation: 3
  }
})

const mapStateToProps = state => {
  return {
    state: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    AUTH_LOGOUT: payload => dispatch(AUTH_LOGOUT(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
