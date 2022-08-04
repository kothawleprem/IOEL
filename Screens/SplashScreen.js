import { StyleSheet, Text, View,ActivityIndicator,Image } from 'react-native'
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SplashScreen = ({navigation}) => {
    const [animating, setAnimating] = useState(true);
    useEffect(() => {
        setTimeout(() => {
          setAnimating(false);
         
          AsyncStorage.getItem('user_id').then((value) =>
            navigation.replace(
              value === null ? 'Login' : 'Home'
            
            ),
          );
        }, 500);
      }, []);

  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/terna.png')}
      style={{width: '90%', resizeMode: 'contain', margin: 30}}
    />
    <ActivityIndicator
      animating={animating}
      color="#FFFFFF"
      size="large"
      style={styles.activityIndicator}
    />
  </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffff',
      },
      activityIndicator: {
        alignItems: 'center',
        height: 80,
        color:'black'
      },
})