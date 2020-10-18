import React from 'react'
import { View, Text, Image } from 'react-native'
import { NavBarItems } from '../../atoms'

const NavBar = () => {
  return (
    <View style={{backgroundColor: 'white', height: 54, flexDirection: 'row'}}> 
    <NavBarItems itemName="Home" img={require('../../../assets/icon/home-active.png')} active/>
    <NavBarItems itemName="Order" img={require('../../../assets/icon/order.png')}/>
    <NavBarItems itemName="Help" img={require('../../../assets/icon/help.png')}/>
    <NavBarItems itemName="Inbox" img={require('../../../assets/icon/inbox.png')}/>
    <NavBarItems itemName="Account" img={require('../../../assets/icon/account.png')}/>
    </View>
  )
}

export default NavBar
