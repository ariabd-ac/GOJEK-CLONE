import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Welcome() {
  return (
    <View style={styles.container}>
      <View style={styles.container_fluid}></View>
      <View style={{backgroundColor: 'yellow'}}>
        <View>
          <Text>aaaa</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
    container_fluid: {
  flex: 1,
  backgroundColor: 'red',
  },
})
