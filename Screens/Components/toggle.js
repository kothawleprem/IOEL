import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, Switch } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Foundation } from '@expo/vector-icons';
import axios from 'axios';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const Toggle = (props) => {
    const [toggle, setToggle] = useState(false);
    console.log(props.id)
  if (toggle == true) {
    const val = 1;
    console.log(`https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=${props.id}&value=${val}`)
    axios.get(`https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=${props.id}&value=${val}`, {

    })
      .then(function (response) {
        // setLoading(false);
      })
      .catch(function (error) {
      });
  } else if (toggle == false) {
    const val = 0;
    axios.get(`https://blynk.cloud/external/api/update?token=URDo1x4O4QVbphoJMxyDBvATiuqSlvla&dataStreamId=${props.id}&value=${val}`, {

    })
      .then(function (response) {
        // setLoading(false);
      })
      .catch(function (error) {
      });

  }
  return (
    <View>
       <TouchableOpacity>
            <LinearGradient
              colors={['#292875', '#5e5cd1']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.card}
            >
            {props.iname == 'fan' ? (
                    <MaterialCommunityIcons name={props.iname} size={30} color={'#6AEAC8'} style={styles.icons} />
            ) : (
                    <Foundation name={props.iname} size={30} color={'#6AEAC8'} style={styles.icons} />
            )}
              
              <Text style={styles.texte}>{props.title}</Text>
         
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
  )
}

export default Toggle
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
  

  }
})