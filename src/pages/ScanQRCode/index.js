import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { RNCamera } from 'react-native-camera';

const IconWithText = ({title}) => {
  return(
    <View>
      <View style={{width: 70, height: 70, borderRadius: 70, backgroundColor: '#51a756'}}/>
      <Text style={{maxWidth: 70, textAlign: 'center', marginTop: 10}}>{title}</Text>
    </View>
  )
}

const IconAction = () => {
  return(
    <View style={{height: 35, width: 35, borderRadius: 35, backgroundColor: 'white'}}/>
      
  )
}

class ScanQRCode extends React.Component {
  state = {
    barcode: 'More Options '
  }
  render (){
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'grey'}}> 
          <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={{
            width: '100%',
            height: '100%',
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
          
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          onBarCodeRead={(barcode) => {
            console.log(barcode);
            this.setState({
              barcode: barcode.data,
            })
          }}
          />
          
     
          
        <View style={{flexDirection: 'row', paddingHorizontal: 16, marginTop: 16 ,justifyContent: 'space-between', position: 'absolute', top: 0, left: 0, width: '100%'}}>
          <IconAction/>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 80,}}>
            <IconAction/>
            <IconAction/>
          </View>
        </View>
      </View>
      <View style={{height: 200, backgroundColor: 'white', paddingHorizontal: 16}}> 
      <View style={{alignItems: 'center', marginBottom: 18, marginTop: 8}}>
        <View style={{height: 5, width: 40, backgroundColor: '#e0e0e0', marginVertical: 1}}></View>
        <View style={{height: 5, width: 40, backgroundColor: '#e0e0e0', marginVertical: 1}}></View>
      </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 24}}>{this.state.barcode}</Text>
          <Text style={{color: '#51a756', fontWeight: 'bold', fontSize: 12}}>SHORTCUT</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%'}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', width: 170, justifyContent: 'space-between', paddingRight: 12}}>
            <IconWithText title="Phone Number"/>
            <IconWithText title="Gopay code"/>
          </View>
          <View style={{height: 80, width: 1, backgroundColor: 'grey'}}/>
          <View style={{flex: 1, paddingLeft: 12}}>
            <Text>Your recent GoPay receiver will show here. No admin fees!</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
}



export default ScanQRCode
