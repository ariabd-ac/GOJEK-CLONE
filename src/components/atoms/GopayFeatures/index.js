import React from 'react'
import { View, Text, Image } from 'react-native'

const GopayFeatures = (props) => {
  return (
    <View style={{flex: 1,alignItems: 'center', }}>
      <Image source={props.icon}/>
      <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}>
        {props.text}
      </Text>
    </View>
  )
}

export default GopayFeatures
