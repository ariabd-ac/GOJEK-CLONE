import React from 'react'
import { View, Image, TextInput } from 'react-native'

const SearchBar = () => {
  return (
    <View style={{marginHorizontal: 17,flexDirection: "row", paddingTop: 12}}>
        <View style={{ flex: 1, position: "relative",}}>
          <TextInput placeholder="What do you want to eat?" style={{ borderWidth: 1, borderRadius: 25, borderColor: '#E8e8e8', height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white'}}/>
            <Image source={require('../../../assets/icon/search.png')} style={{position: 'absolute', top: 6, left:12,}}/>
        </View>
        <View style={{width: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 10,}}>
          <Image source={require('../../../assets/icon/promo.png')}/>
        </View>
      </View>
  )
}

export default SearchBar
