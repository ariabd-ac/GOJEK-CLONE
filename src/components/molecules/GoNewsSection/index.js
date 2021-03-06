import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Button } from '../../atoms'

const GoNewsSection = ({onPress}) => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
    <View style={{position: 'relative'}}>
      <Image source={require('../../../assets/dummy/sepak-bola.jpg')} style={{height: 190, width: '100%', borderRadius: 6 }}/>
      <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6,}}></View>
      <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
        <Image source={require('../../../assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
      </View>
    </View>
    <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1,}}>
      <Text style={{fontWeight: 'bold', fontSize: 16,color: 'rgb(28, 28, 28)'}}>GO-NEWS</Text>
      <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a' , marginBottom: 11}}>Evan dimas pemain yang kaya akan segudang prestasi, dan meraih trofi terbanyak di teamnya</Text>
      {/* <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal:12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4}} onPress={onPress}>
        <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
      </TouchableOpacity> */}
      <Button title="Read" onPress={onPress}/>
    </View>
  </View>
  )
}

export default GoNewsSection
