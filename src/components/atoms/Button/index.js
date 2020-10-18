import React from 'react'
import { StyleSheet, Text, View, } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Button = ({ onPress, title }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: '#61a756', paddingHorizontal: 12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4 }} onPress={onPress}>
      <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})
