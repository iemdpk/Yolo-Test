import React from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Header,Image,Input,Button,Rating,Icon } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";
import { WebView } from 'react-native-webview';

function ThirdScreen({navigation}) {


  const navigater =()=>{
    navigation.navigate('SecondScreen');
  }


    return (
      <View style={{ flex: 1,backgroundColor:'white'}}>
        <ScrollView>
        <Header
          containerStyle={{elevation: 20}}
          backgroundColor="white"
          centerComponent={<Text style={{color:'black',fontFamily:'Signika-SemiBold',fontSize:size(20)}}>Doctor Details</Text>}
          rightComponent={{icon:'search', color:'black'}}
          leftComponent={{icon:'arrow-back', color:'black'}}
        />
    
        <View style={{...styles.index}}>

            <View style={{alignItems:'center'}}>

            <View style={{height:vw(150),width:'90%',backgroundColor:'white',marginTop:size(20),borderRadius:size(10),elevation:5,alignItems:'center',justifyContent:'center'}}>
                
                <View style={{flexDirection:'row',margin:size(10)}}>

                    <View style={{width:'35%'}}>
                        <Image source={require('./assets/doctor.jpg')} style={{height:100,width:100,resizeMode:'contain',borderRadius:size(10)}} />
                    </View>

                    
                    <View style={{width:'35%'}}>

                            <Text style={{...styles.textColor,fontSize:size(20),fontFamily:'Signika-Regular'}}>Johan Smith</Text>
                            <Text style={{...styles.textColor,fontSize:size(14),fontFamily:'Signika-Regular',color:'rgba(1,1,1,0.5)'}}>ETH Specilist</Text>
                            
                            <Rating
                            style={{marginRight:size(10),marginTop:size(10)}}
                            imageSize={28}
                            />

                            <Text style={{...styles.textColor,fontSize:size(20),fontFamily:'Signika-Regular',color:'#07c3de'}}>$20.00/hr</Text>
 
                    </View>

                    
                    <View style={{width:'30%'}}>
                        <Icon type="font-awesome" name="heart" size={size(20)} color={'red'} />
                    </View>

                </View>

            </View>
        </View>

        <View style={{height:'100%',backgroundColor:'white',marginTop:size(25)}}>
        <View>

            <View style={{margin:size(30)}}>
                <Text style={{...styles.textColor,fontFamily:'Signika-Regular',fontSize:size(20),marginBottom:size(10)}}>Services</Text>
                {/* Sub Items */}
                <Text style={{...styles.textColor,fontFamily:'Signika-Light',fontSize:size(15)}}> <Icon type="font-awesome" name="circle" size={size(10)} color={'grey'} /> Lorem Ipsum is simply dummy text of the printing</Text>
                <Text style={{...styles.textColor,fontFamily:'Signika-Light',fontSize:size(15)}}> <Icon type="font-awesome" name="circle" size={size(10)} color={'grey'} /> Lorem Ipsum is simply dummy text of the printing</Text>
                <Text style={{...styles.textColor,fontFamily:'Signika-Light',fontSize:size(15)}}> <Icon type="font-awesome" name="circle" size={size(10)} color={'grey'} /> Lorem Ipsum is simply dummy text of the printing</Text>
            </View>

            <View style={{marginTop:size(3),marginLeft:size(20)}}>
                <Text style={{...styles.textColor,fontFamily:'Signika-Regular',fontSize:size(20),marginBottom:size(10)}}>Location</Text>
            <Image source={require('./assets/map.jpg')} style={{height:size(200),width:'90%',resizeMode:'cover',borderRadius:size(10)}} />      
            </View>

        <View style={{flexDirection:'row',marginTop:size(20)}}>

            <View style={{width:'30%',alignItems:'center'}}>
            <Text style={{...styles.textColor,fontFamily:'Signika-Regular',fontSize:size(20)}}>Distance</Text>
            <Text style={{...styles.textColor,fontFamily:'Signika-Light',fontSize:size(20)}}>2.10 Km</Text>
            </View>

            <View style={{width:'30%',alignItems:'center'}}>
            <Text style={{...styles.textColor,fontFamily:'Signika-Regular',fontSize:size(20)}}>Time</Text>
            <Text style={{...styles.textColor,fontFamily:'Signika-Light',fontSize:size(20)}}>20 min</Text>
            </View>

            <View style={{width:'30%',alignItems:'center',justifyContent:'center'}}>
            <Icon type="font-awesome" name="send" color={"#00cada"} />
            </View>

        </View>

        
        <View style={{margin:size(20)}}>
            <Text style={{...styles.textColor,fontFamily:'Signika-Light',fontSize:size(20)}}>Iris Watson P.O. Box 283 8562 Fusce Rd Frederick Nebraska 20620</Text>
        </View>



        </View>
            

        </View>


        </View>

        </ScrollView>
      </View>);
}


const styles = StyleSheet.create({

  index:{
    flex:1,
    backgroundColor:'rgba(20,192,201,0.1)',
    
  },

  subview:{
    flex:1,
    width:'100%',
    backgroundColor:'white',
    borderRadius:size(30),
    justifyContent:'center',
    
  },
  textColor:{
    color:'black',
  },

  image:{height:size(180),width:size(180),borderRadius:size(100)},


})

export default ThirdScreen;