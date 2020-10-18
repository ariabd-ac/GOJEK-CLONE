import React from 'react'
import { View, Text, Image } from 'react-native'

const NavBarItems = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
      <Image source={props.img}/>
      <Text style={{fontSize: 10, marginTop: 4, color: props.active ?  '#61a756' : '#545454'}}>{props.itemName}</Text>
    </View>
  )
}

export default NavBarItems
