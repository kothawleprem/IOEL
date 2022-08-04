import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Foundation } from '@expo/vector-icons';
import axios from 'axios';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import Toggle from './Components/toggle';



// const image = { uri: "https://img.freepik.com/free-vector/home-interior-background-concept_52683-44328.jpg?w=996&t=st=1659338802~exp=1659339402~hmac=2e0f294d0b187679064bd484a3cf96050d6549d6856208f5a1066ab27cbe0911" };
const image = require('../assets/sunset.jpg');


const HomeLight = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.Text}> Good Morning </Text>
        <Text style={styles.name}> Prem </Text>

        <View style={styles.outercontainer}>

        <Toggle id="1" iname="lightbulb" title="Light 1"/>
        <Toggle id="5" iname="lightbulb" title="Light 2"/>
     
        

         
        </View>
        <View style={styles.othercontainer}>  
        <Toggle id="7" iname="fan" title="Fan     "/>

        </View> 


      </ImageBackground>

    </View>
  )
}

export default HomeLight

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    width: 400,
    height: 500,
    // backfaceVisibility:100
    // margin:10

  },
  container: {
    flex: 1,
    backgroundColor: '#0C143B',


  },
  card: {
    // backgroundColor:'#0F09CD',
    height: 100,
    width: 160,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row'


  },
  outercontainer: {
    margin: 1,
    flexDirection: 'row',
    bottom: -160,

  },
  othercontainer: {
    margin: 1,
    flexDirection: 'row',
    bottom: -160,
    justifyContent:"center"
  },
  Text: {
    bottom: -10,
    fontSize: 40,
    fontWeight: 'bold',
    color: '#eeee'
  },
  name: {
    bottom: -10,
    fontSize: 30,
    fontWeight: 'bold',
    color: '#eeee',
    marginLeft: 5
  },
  texte: {
    fontWeight: 'bold',
    color: '#eeee',
    margin: 10,
    bottom: -10,
    right: 15



  },
  icons: {
    margin: 10

  },
  Switch:{
    top:20,

  },
  flex:{
    flexDirection:'column',
    top:20
  }

})