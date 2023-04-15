import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView   } from 'react-native';
import { Header,Image,Input,Button, Icon,Card,FAB } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Snackbar from "react-native-snackbar";
import axios from 'axios';

function HomeScreen({route,navigation}) {

    var [otp2,setOTP] = useState();

    var {number,otp} =  route.params;

      useEffect(()=>{
        console.log(otp);
        console.log(number);
      },[]);

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        
        <View style={{flex:1}}>
        <Header
            placement="left"
            leftComponent={{ icon: 'chevron-left',size:size(40),color: 'black',type:'font-awesome5'}}
            backgroundColor="white"
        />
        
        <View>
            <View style={{marginLeft:size(20)}}>
                <Text style={{fontSize:size(40),color:'black',fontFamily:'Signika-Regular'}}>Enter OTP to verify your phone number</Text>
            </View>

            <Text style={{color:'grey',fontFamily:'Signika-Regular',marginTop:vh(20),marginRight:vh(20),marginLeft:vh(20)}}>OTP is send to 8789033735</Text>
            <Input keyboardType="numeric" maxLength={6} style={{fontFamily:'Signika-Regular',marginTop:vh(20),marginRight:vh(20),marginLeft:vh(20)}} placeholder="" placeholderTextColor={"black"} onChangeText={(val)=>{
              setOTP(val);
          }} />


        </View>
        </View>

        
        <View style={{flex:0.1,backgroundColor:'white',flexDirection:'row'}}>

            <View style={{width:'50%',justifyContent:'center',alignItems:'flex-start'}}>

            </View>

            
            <View style={{width:'50%',justifyContent:'center',alignItems:'flex-end'}}>
      <FAB
        color="black"
        style={{margin:size(10)}}
        icon={{ name: 'chevron-right', color: 'white',type:'font-awesome5',size:size(30) }}
        iconPosition="right"
        titleStyle={{fontFamily:'Signika-Bold'}}
        size="large"
        onPress={()=>{
          // navigation.navigate('SecondScreen');
          if(otp2 == otp){
            
            Snackbar.show({
              backgroundColor:'black',
              text: 'OTP Verified Successfull',
              duration: Snackbar.LENGTH_LONG,
              textColor:'white'
          });

          AsyncStorage.setItem('number',number);
         

          axios.get('http://15.206.82.29/verify?number='+number).then((val)=>{

        

            if(val.data == "First User"){
              Snackbar.show({
                backgroundColor:'black',
                text: 'You are registering for the first time',
                duration: Snackbar.LENGTH_LONG,
                textColor:'white'
            });
            
            AsyncStorage.setItem('number',number);
            navigation.navigate('Name');

            }
            else{
              Snackbar.show({
                backgroundColor:'black',
                text: 'You are Already Register',
                duration: Snackbar.LENGTH_LONG,
                textColor:'white'
            });
              AsyncStorage.setItem('number',number);
              navigation.navigate('Dashboard');
            }
            });

          }
          else{
            
            
            Snackbar.show({
              backgroundColor:'black',
              text: 'OTP is incorrect Please! Please retry',
              fontFamily:'Signika-Bold',
              duration: Snackbar.LENGTH_LONG,
              textColor:'white'
            });

          }
        }}
      />
      </View>
            




        </View>


    </View>
    );
}


const styles = StyleSheet.create({

  index:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#f4f6f8',
    
    
  },

  subview:{
    flex:1,
    width:'100%',
    backgroundColor:'#f4f6f8',
    borderRadius:size(30),
    justifyContent:'center',
    
  },
  textColor:{
    color:'black',
  },

  image:{height:size(180),width:size(180),borderRadius:size(100)},


})

export default HomeScreen;