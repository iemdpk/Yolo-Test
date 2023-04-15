import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Header,Image,Input,Button, Icon,Card,FAB } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios';
import Snackbar from "react-native-snackbar";

function refralCode({navigation}) {

    var [refralCode,setRefralCode] = useState();

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
                <Text style={{fontSize:size(40),color:'black',fontFamily:'Signika-Regular'}}>Please Enter Your Refral Code</Text>
            </View>
            <Input keyboardType="numeric" style={{fontFamily:'Signika-Regular',marginTop:vh(20),marginRight:vh(20),marginLeft:vh(20)}} placeholderTextColor={"black"} onChangeText={(val)=>{
              setRefralCode(val);
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
        onPress={async ()=>{
          var name,email,dob,phone;

          await AsyncStorage.getItem('name').then((val)=>{
            name=val;
          });

          await AsyncStorage.getItem('email').then((val)=>{
            email=val;
          });
          
          await AsyncStorage.getItem('Dob').then((val)=>{
            dob=val;
          });

          await AsyncStorage.getItem('number').then((val)=>{
            number=val;
          });

          var object = {
            name:name,
            email:email,
            dob:dob,
            refralCode:refralCode,
            number:number
          }

          console.log('http://15.206.82.29/register?number='+number+"&data="+JSON.stringify(object));

          axios.get('http://15.206.82.29/register?number='+number+"&data="+JSON.stringify(object)).then((val)=>{
            console.log(val.data);

            Snackbar.show({
              backgroundColor:'black',
              text: 'Account Create Successfully',
              duration: Snackbar.LENGTH_LONG,
              textColor:'white'
          });
          navigation.navigate('Dashboard');

          });

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

export default refralCode;