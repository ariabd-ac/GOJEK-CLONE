
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  
} from 'react-native';
import { GopaySection, SearchBar } from './components/molecules';
import { Welcome } from './screen';

const App = () => {
  return (
   <View style={{flex: 1}}>
    {/* <Welcome/> */}
    <ScrollView style={{flex: 1, backgroundColor: 'white'}}>
     
      {/* serch bar */}
      <SearchBar/>
      {/* <View style={{marginHorizontal: 17,flexDirection: "row", paddingTop: 12}}>
        <View style={{ flex: 1, position: "relative",}}>
          <TextInput placeholder="What do you want to eat?" style={{ borderWidth: 1, borderRadius: 25, borderColor: '#E8e8e8', height: 40, fontSize: 13, paddingLeft: 45, paddingRight: 20, backgroundColor: 'white'}}/>
            <Image source={require('./assets/icon/search.png')} style={{position: 'absolute', top: 6, left:12,}}/>
        </View>
        <View style={{width: 35, alignItems: 'center', justifyContent: 'center', marginLeft: 10,}}>
          <Image source={require('./assets/icon/promo.png')}/>
        </View>
      </View> */}
  
    {/* gopay */}

    <GopaySection/>
    
      {/* <View style={{marginHorizontal: 17, marginTop: 8}}>
      <View style={{flexDirection: 'row', justifyContent:'space-between', backgroundColor: '#2c5fb8', borderTopLeftRadius: 4, borderTopRightRadius: 4,padding: 14,}}>
        <Image source={require('./assets/icon/gopay.png')}/>
        <Text style={{fontSize: 17, fontWeight: 'bold', color:'white',}}>Rp. 64.769.841</Text>
      </View>
      <View style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 14, backgroundColor: '#2f65bD', borderBottomLeftRadius: 4, borderBottomRightRadius: 4}}>
        <View style={{flex: 1,alignItems: 'center', }}>
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
        </View>
      </View>
    </View> */}

      {/* Main feature */}
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18,}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 18,}}>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-ride.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-RIDE</Text>
          </View>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-car.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-CAR</Text>
          </View>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-bluebird.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-BLUEBIRD</Text>
          </View>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-send.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-SEND</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row', width: '100%', }}>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-deals.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>G0-DEALS</Text>
          </View>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-pulsa.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-PULSA</Text>
          </View>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-food.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>GO-FOOD</Text>
          </View>
          <View style={{width: '25%', justifyContent: "center", alignItems: 'center'}}>
            <View style={{width: 58, height: 58, borderWidth: 1, borderColor: '#efefef', borderRadius: 18, alignItems: 'center', justifyContent: 'center'}}>
              <Image source={require('./assets/icon/go-more.png')} style={{}}/>
            </View>
            <Text style={{fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6}}>MORE</Text>
          </View>
        </View>
        
      </View>

      {/* line */}
      <View style={{height: 17, backgroundColor: '#f2f2f4', marginTop: 20,}}></View>
     
      {/* new section */}
      <View style={{paddingTop: 16, paddingHorizontal: 16}}>
        <View style={{position: 'relative'}}>
          <Image source={require('./assets/dummy/sepak-bola.jpg')} style={{height: 190, width: '100%', borderRadius: 6 }}/>
          <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6,}}></View>
          <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
            <Image source={require('./assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>
        </View>
        <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1,}}>
          <Text style={{fontWeight: 'bold', fontSize: 16,color: 'rgb(28, 28, 28)'}}>GO-NEWS</Text>
          <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a' , marginBottom: 11}}>Evan dimas pemain yang kaya akan segudang prestasi, dan meraih trofi terbanyak di teamnya</Text>
          <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal:12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* internal information */}

      <View style={{padding: 16, paddingBottom: 0,}}>
          <View style={{height: 15, width: 65, marginLeft: -4}}>
            <Image source={require('./assets/logo/gojek.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>
          <Text style={{fontSize: 17, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 15, marginBottom: 20,}}>
            Complite your profile
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 16,}}>
            <View>
              <Image source={require('./assets/dummy/facebook-connect.png')}/>
            </View>
            <View style={{marginLeft: 16, flex: 1,}}>
              <Text style={{fontSize: 15, color: '#4a4a4a', fontWeight: 'bold',}}>Connect with Facebook</Text>
              <Text style={{fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%'}}>Log in faseter without verfication code</Text>
            </View>
          </View>
          <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal:12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>CONNECT</Text>
          </TouchableOpacity>
          <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16}}></View>
      </View>


      {/* Go-foods banner section */}
      <View style={{padding: 16,  }}>
        <View style={{position: 'relative',}}>
          <Image source={require('./assets/dummy/food-banner.jpg')} style={{height: 190, width: '100%', borderRadius: 6, }}/>
          <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6,}}></View>
          <View style={{height: 15, width: 65, position: 'absolute', top: 16, left: 16}}>
            <Image source={require('./assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>
          <View style={{position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
            <View>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}> Free GO-FOOD voucer</Text>
              <Text style={{fontSize: 12,fontWeight: '400', color: 'white'}}> Quick, before they run out!</Text>
            </View>
            <View style={{flex: 1, paddingLeft: 12}}>
              <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal:12, paddingVertical: 12, alignSelf: 'stretch', borderRadius: 4}}>
                <Text style={{fontSize: 11, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>GET VOUCHER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16}}></View>
      </View>

         {/* new section */}
      <View style={{paddingHorizontal: 16, padding: 0,}}>
        <View style={{position: 'relative'}}>
          <Image source={require('./assets/dummy/amien-rais.jpg')} style={{height: 190, width: '100%', borderRadius: 6 }}/>
          <View style={{width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6,}}></View>
          <View style={{height: 15, width: 55, position: 'absolute', top: 16, left: 16}}>
            <Image source={require('./assets/logo/white.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>
        </View>
        <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#e8e9ed', borderBottomWidth: 1,}}>
          <Text style={{fontWeight: 'bold', fontSize: 16,color: 'rgb(28, 28, 28)'}}>GO-NEWS</Text>
          <Text style={{fontSize: 14, fontWeight: 'normal', color: '#7a7a7a' , marginBottom: 11}}>Amien Rais Umumkan Partai Baru, Apa Saja Syarat Mendirikan Partai?
Melalui YouTube, Amien Rais mengumumkan telah mendirikan partai baru bernama Partai Ummat, Kamis (1/10/2020). Seperti apa syarat pendirian partai?</Text>
          <TouchableOpacity style={{backgroundColor: '#61a756', paddingHorizontal:12, paddingVertical: 12, alignSelf: 'flex-end', borderRadius: 4}}>
            <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Nerbeay restauran */}
      <View>
          <View style={{height: 15, width: 65, marginLeft: 16}}>
            <Image source={require('./assets/logo/go-food.png')} style={{width: undefined, height: undefined, resizeMode: 'contain', flex: 1}}/>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16}}>
            <Text style={{fontSize: 17, fontWeight:'bold', color: 'rgb(28, 28, 28) '}}>Nearby Restaurant</Text>
            <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61a756'}}>See All</Text>
          </View>

          <ScrollView horizontal style={{flexDirection: 'row', paddingLeft: 16}}>
            <View style={{marginRight: 16}}>
              <View style={{height: 150, width: 150, borderRadius: 10,}}>
                <Image source={require('./assets/dummy/go-food-kfc.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 12,}}>KFC SARINAH</Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{height: 150, width: 150, borderRadius: 10,}}>
                <Image source={require('./assets/dummy/go-food-gm.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 12,}}>Bakmi Jawa Pak Seto</Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{height: 150, width: 150, borderRadius: 10,}}>
                <Image source={require('./assets/dummy/go-food-orins.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 12,}}>Martabak Mas Toti</Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{height: 150, width: 150, borderRadius: 10,}}>
                <Image source={require('./assets/dummy/go-food-banka.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 12,}}>Martabak Yu Selena</Text>
            </View>
            <View style={{marginRight: 16}}>
              <View style={{height: 150, width: 150, borderRadius: 10,}}>
                <Image source={require('./assets/dummy/go-food-pak-boss.jpg')} style={{width: undefined, height: undefined, resizeMode: 'cover', flex: 1, }}/>
              </View>
              <Text style={{fontSize: 16, fontWeight: 'bold', color: 'rgb(28, 28, 28)', marginTop: 12,}}>Geprek tidak berdaging</Text>
            </View>
            
          </ScrollView>

          <View style={{ borderBottomColor: '#e8e9ed', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16}}></View>
      </View>
    </ScrollView>
    
    {/* menu bar bawah */}
    <View style={{backgroundColor: 'white', height: 54, flexDirection: 'row'}}> 
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
          <Image source={require('./assets/icon/home-active.png')}/>
          <Text style={{fontSize: 10, marginTop: 4,}}>Home</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        
          <Image source={require('./assets/icon/order.png')}/>
        <Text style={{fontSize: 10, marginTop: 4,}}>Order</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        
          <Image source={require('./assets/icon/help.png')}/>
        <Text style={{fontSize: 10, marginTop: 4,}}>Help</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
       
          <Image source={require('./assets/icon/inbox.png')}/>
        <Text style={{fontSize: 10, marginTop: 4,}}>Inbox</Text>
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center'}}>
        
          <Image source={require('./assets/icon/account.png')}/>
        <Text style={{fontSize: 10, marginTop: 4,}}>Account</Text>
      </View>
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
