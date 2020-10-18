import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const GopayFeatures = ({text, icon, onPress}) => {
  return (
    <View style={{flex: 1,alignItems: 'center', }}>
      <TouchableOpacity onPress={onPress}>
      <Image source={icon}/>
      <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15, textAlign: 'center'}}>
        {text}
      </Text>
      </TouchableOpacity>
    </View>
  )
}

export default GopayFeatures
