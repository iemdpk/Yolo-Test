import React,{useState} from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Header,Image,Input,Button, Icon,Card,FAB } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";
import axios from 'axios';
function HomeScreen({navigation}) {

    var [number,setNumber] = useState();
    var [loading,setLoading] = useState(false);    

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
                <Text style={{fontSize:size(40),color:'black',fontFamily:'Signika-Regular'}}>May I have your phone number</Text>
            </View>

            <Text style={{color:'grey',fontFamily:'Signika-Regular',marginTop:vh(20),marginRight:vh(20),marginLeft:vh(20)}}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</Text>
            <Input keyboardType="numeric" style={{fontFamily:'Signika-Regular',marginTop:vh(20),marginRight:vh(20),marginLeft:vh(20)}} placeholder="+91" placeholderTextColor={"black"} onChangeText={(val)=>{
              setNumber(val);
            }} />
            
        </View>
        </View>

        
        <View style={{flex:0.1,backgroundColor:'white',justifyContent:'flex-end',alignItems:'flex-end'}}>

        <FAB
        color="black"
        style={{margin:size(10)}}
        icon={{ name: 'chevron-right', color: 'white',type:'font-awesome5',size:size(30) }}
        iconPosition="right"
        loading={loading}
        titleStyle={{fontFamily:'Signika-Bold'}}
        title={"Get OTP"}
        size="large"
        onPress={()=>{
          setLoading(true);
          var otp = Math.floor(Math.random() * 9999)+1111;

          axios.get('https://2factor.in/API/V1/c6d4e246-dad8-11ed-addf-0200cd936042/SMS/+91'+number+'/'+otp+'/OTP1').then((val)=>{
            navigation.navigate('SecondScreen',{'number':number,'otp':otp});
          });
          
          
        }}
      />

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