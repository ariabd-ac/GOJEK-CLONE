import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { GopaySection, SearchBar, MainFueaturesSection, GoNewsSection, GoInfoSection, GoBannerSection, NearbySection, NavBar } from "../../components/molecules/";


export class Home extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
        <SearchBar/>
        <GopaySection/>
        <MainFueaturesSection/>
        <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20,}}></View>
        <GoNewsSection onPress={() => this.props.navigation.navigate('News')}/>
        <GoInfoSection/>
        <GoBannerSection/>
        <NearbySection/>
      </ScrollView>
      {/* menu bar bawah */}
      <NavBar/>
     </View>
    )
  }
}

export default Home
