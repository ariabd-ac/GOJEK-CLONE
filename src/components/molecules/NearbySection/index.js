import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { NearbyItems } from '../../atoms'

const NearbySection = () => {
  return (
    <View>
      <View style={{height: 15, width: 65, marginLeft: 16}}>
        <Image source={require('../../../assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
        <Text style={{fontSize: 17, fontWeight:'bold', color: 'rgb(28, 28, 28) '}}>Nearby Restaurant</Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
      </View>
      <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
        <NearbyItems itemName="KFC SARINAH" img={require('../../../assets/dummy/go-food-kfc.jpg')}/>
        <NearbyItems itemName="Bakmi Pak Seto" img={require('../../../assets/dummy/go-food-gm.jpg')}/>
        <NearbyItems itemName="Martabak Mas Toti" img={require('../../../assets/dummy/go-food-orins.jpg')}/>
        <NearbyItems itemName="Martabak Yu Grande" img={require('../../../assets/dummy/go-food-banka.jpg')}/>
        <NearbyItems itemName="Geprek tanpa daging" img={require('../../../assets/dummy/go-food-pak-boss.jpg')}/>
      </ScrollView>
      <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16}}></View>
  </View>
  )
}

export default NearbySection
