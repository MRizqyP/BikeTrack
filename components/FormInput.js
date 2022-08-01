import React from 'react'
import { View, Text, TextInput, StyleSheet, Platform } from 'react-native'
import PropTypes from 'prop-types'

export default function FormInput({
  placeholder,
  placeholderTextColor,
  autoCapitalize,
  onChangeText,
  secureTextEntry
}) {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      style={styles.textInput}
      autoCapitalize={autoCapitalize}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a'
  }
})
