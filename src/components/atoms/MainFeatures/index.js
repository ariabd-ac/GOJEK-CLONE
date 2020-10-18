import React from 'react'
import { View, Text, Image } from 'react-native'

const MainFeatures = (props) => {
  return (
      <View style={{width: '25%', justifyContent: "center", alignItems: 'center',marginBottom: 18,}}>
        <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
          <Image source={props.img} style={{}}/>
        </View>
        <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>{props.judul}</Text>
      </View>
  )
}

export default MainFeatures
