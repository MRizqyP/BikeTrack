import { PermissionsAndroid } from 'react-native'

export const requestPermissionLocation = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Request Location Access',
        message: 'BikeTrack app request access your phone location',
        buttonPositive: 'OK'
      }
    )
    return granted === PermissionsAndroid.RESULTS.GRANTED
  } catch (err) {
    return false
  }
}
