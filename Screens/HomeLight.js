import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Foundation } from '@expo/vector-icons';
import axios from 'axios';

import { MaterialCommunityIcons } from '@expo/vector-icons';



// const image = { uri: "https://img.freepik.com/free-vector/home-interior-background-concept_52683-44328.jpg?w=996&t=st=1659338802~exp=1659339402~hmac=2e0f294d0b187679064bd484a3cf96050d6549d6856208f5a1066ab27cbe0911" };
const image = require('../assets/sunset.jpg');


const HomeLight = () => {
  const [toggle, setToggle] = useState(false);
  if (toggle == true) {
    axios.get('https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=1&value=0', {

    })
      .then(function (response) {
        // setLoading(false);
      })
      .catch(function (error) {
      });
  } else if (toggle == false) {
    axios.get('https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=1&value=1', {

    })
      .then(function (response) {
        // setLoading(false);
      })
      .catch(function (error) {
      });

  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.Text}> Good Morning </Text>
        <Text style={styles.name}> Prem </Text>

        <View style={styles.outercontainer}>


          <TouchableOpacity>
            <LinearGradient
              colors={['#292875', '#5e5cd1']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
              <Foundation name='lightbulb' size={30} color={'#6AEAC8'} style={styles.icons} />
              <Text style={styles.texte}> Light 1</Text>
         
              <Switch
                trackColor={{ false: 'gray', true: '#6AEAC8' }}
                thumbColor="white"
                onValueChange={(value) => setToggle(value)}
                value={toggle}
                style={styles.Switch}
              />
            </LinearGradient>

          </TouchableOpacity>



          <TouchableOpacity>
            <LinearGradient
              colors={['#292875', '#5e5cd1']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}>
              <Foundation name='lightbulb' size={30} color={'#6AEAC8'} style={styles.icons} />

              <Text style={styles.texte}> Light 2</Text>
              <Switch
                trackColor={{ false: 'gray', true: '#6AEAC8' }}
                thumbColor="white"
                onValueChange={(value) => setToggle(value)}
                value={toggle}
                style={styles.Switch}
              />
            </LinearGradient>
          </TouchableOpacity>

        </View>

        <View style={styles.outercontainer} >

          <TouchableOpacity>
            <LinearGradient
              colors={['#292875', '#5e5cd1']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}>
              <MaterialCommunityIcons name='fan' size={30} color={'#6AEAC8'} style={styles.icons} />

              <Text style={styles.texte}>Fan</Text>
              <Switch
                trackColor={{ false: 'gray', true: '#6AEAC8' }}
                thumbColor="white"
                onValueChange={(value) => setToggle(value)}
                value={toggle}
                style={styles.Switch}
              />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity>

            <LinearGradient
              colors={['#292875', '#5e5cd1']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}>
              <MaterialCommunityIcons name='fan' size={30} color={'#6AEAC8'} style={styles.icons} />

              <Text style={styles.texte}>Fan</Text>
              <Switch
                trackColor={{ false: 'gray', true: '#6AEAC8' }}
                thumbColor="white"
                onValueChange={(value) => setToggle(value)}
                value={toggle}
                style={styles.Switch}
              />
            </LinearGradient>
          </TouchableOpacity>
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
    bottom: -160

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

  }
})