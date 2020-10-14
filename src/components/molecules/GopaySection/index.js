import React from 'react'
import { View, Text, Image } from 'react-native'
import { GopayFeatures } from '../../atoms'

const GopaySection = () => {
  return (
    <View style={{marginHorizontal: 17, marginTop: 8}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#2c5fb8', borderTopLeftRadius: 4, borderTopRightRadius: 4,padding: 14,}}>
        <Image source={require('../../../assets/icon/gopay.png')}/>
        <Text style={{fontSize: 17, fontWeight: 'bold', color:'white',}}>Rp. 64.769.841</Text>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
        <GopayFeatures text="Pay" icon={require('../../../assets/icon/pay.png')}/>
        <GopayFeatures text="Nearby" icon={require('../../../assets/icon/nearby.png')}/>
        <GopayFeatures text="TopUp" icon={require('../../../assets/icon/topup.png')}/>
        <GopayFeatures text="More" icon={require('../../../assets/icon/more.png')}/>
        {/* <View style={{flex: 1,alignItems: 'center', }}>
          <Image source={require('./assets/icon/pay.png')}/>
          <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}>
            Pay
          </Text>
        </View>
        <View style={{ flex: 1,alignItems: 'center', }}>
          <Image source={require('./assets/icon/nearby.png')}/>
          <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}>
            Nearby
          </Text>
        </View>
        <View style={{ flex: 1,alignItems: 'center', }}>
          <Image source={require('./assets/icon/topup.png')}/>
          <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}>
            TopUp
          </Text>
        </View>
        <View style={{ flex: 1,alignItems: 'center', }}>
          <Image source={require('./assets/icon/more.png')}/>
          <Text style={{fontSize: 13, color: 'white', fontWeight: 'bold', marginTop: 15}}>
            More
          </Text>
        </View> */}
      </View>
    </View>
  )
}

export default GopaySection
