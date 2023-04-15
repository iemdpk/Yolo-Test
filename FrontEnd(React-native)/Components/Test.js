import React,{useEffect,useState} from 'react';
import {View,Button,Text} from 'react-native';
import {vh,size,vw} from './responsive/size';
import { Input } from 'react-native-elements';

export default function TestHello(){

    var [number,setNumber] = useState();



    return(
    <View style={{flex:1,justifyContent:'center'}}>

        <Input 
            placeholder='Enter your number'
            onChangeText={(val)=>{
                setNumber(val)
            }}
        />
        
        <Button  title="fetch" onPress={()=>{
            console.log(number);
        }} />


        
    </View>
    );



}

