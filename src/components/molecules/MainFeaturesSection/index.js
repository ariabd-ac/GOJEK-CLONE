import React from 'react'
import { View, Text, Image } from 'react-native'
import { MainFeatures } from '../../atoms'

const MainFeaturesSection = () => {
  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18,}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', flexWrap: 'wrap'}}>
          <MainFeatures judul="GO-RIDE" img={require('../../../assets/icon/go-ride.png')}/>
          <MainFeatures judul="GO-CAR" img={require('../../../assets/icon/go-car.png')}/>
          <MainFeatures judul="GO-BLUEBIRD" img={require('../../../assets/icon/go-bluebird.png')}/>
          <MainFeatures judul="GO-SEND" img={require('../../../assets/icon/go-send.png')}/>
          <MainFeatures judul="GO-DEALS" img={require('../../../assets/icon/go-deals.png')}/>
          <MainFeatures judul="GO-PULSA" img={require('../../../assets/icon/go-pulsa.png')}/>
          <MainFeatures judul="GO-FOOD" img={require('../../../assets/icon/go-food.png')}/>
          <MainFeatures judul="MORE" img={require('../../../assets/icon/go-more.png')}/>
        </View>
      </View>
  )
}

export default MainFeaturesSection
