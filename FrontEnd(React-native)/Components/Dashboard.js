import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import { Header,Image,Input,Button, Icon,Card,FAB } from "react-native-elements";
import { vw,vh,size } from "./responsive/size";
import AsyncStorage from "@react-native-async-storage/async-storage";


function Dashboard({navigation}) {

    var [number,setNumber] = useState();

    useEffect(async ()=>{
      
      var data = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys)
      console.log(items);

    });
    

    return (
      <View style={{flex:1,backgroundColor:'white'}}>
        
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        
        <Text>Dashboard</Text>


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

export default Dashboard;