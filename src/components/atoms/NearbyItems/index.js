import React from 'react'
import { View, Text, Image } from 'react-native'

const NearbyItems = (props) => {
  return (
    <View style={{marginRight: 16}}>
    <View style={{height: 150, width: 150, borderRadius: 10,}}>
      <Image source={props.img} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
    </View>
    <View style={{width: 150}}>
      <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 12,}}>{props.itemName}</Text>
    </View>
  </View>
  )
}

export default NearbyItems
