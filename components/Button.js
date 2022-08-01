import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

export default function Button({ text, onPress, backgroundColor }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          justifyContent: 'center',
          marginTop: 30,
          width: 300,
          height: 45,
          backgroundColor: !backgroundColor ? '#51C9C2' : backgroundColor,
          borderRadius: 8,
          elevation: 3
        }}
      >
        <Text style={[styles.textButton]}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    // fontSize: FONT_BOLD_14,
    textAlign: 'center'
  }
  // buttonMasuk: {

  // },
})
