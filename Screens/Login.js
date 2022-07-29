import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity,Text,Image, KeyboardAvoidingView } from 'react-native'
import { Input } from "@rneui/themed";
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const openRegisterScreen = () => {
      navigation.navigate('Register');
    };

    const signin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate('Home');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorMessage);
        });
    };

    return (
    
        <View style={styles.container}>
           {/* <View style={styles.circle} />  */}
           <Image
        style={styles.logo}
        source={require('../assets/terna.png')}
      />
                 <Text style={{fontWeight:'900',alignItems:'center',fontSize:16} }> Smart City</Text>

            <Image
        style={styles.Image}
        source={require('../assets/smartcity.png')}
      />
      
    
            <Input
                placeholder='Enter your email'
                label='Email'
                leftIcon={{ type: 'material', name: 'email' , color: '#b0b0b0' }}
                value={email}
                onChangeText={text => setEmail(text)}
                style={styles.Input}
            />
            
            <Input
                placeholder='Enter your password'
                label='Password'
                leftIcon={{ type: 'material', name: 'lock' ,color: '#b0b0b0' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
                style={styles.Input}
            />
           
            <TouchableOpacity style={styles.buttons} onPress={signin}>
             <Text style={styles.buttontext}> Login in</Text> 
             </TouchableOpacity>

             <TouchableOpacity style={styles.buttons} onPress={openRegisterScreen}>
             <Text style={styles.buttontext}>Register</Text> 
             </TouchableOpacity>
            
           
            {/* <Button title="sign in" style={styles.button} onPress={signin} />
            <Button title="register" style={styles.button} onPress={openRegisterScreen} /> */}
      
        </View>
       
        
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
      
        backgroundColor:'#ffffff'
    },
    button: {
        width: 360,
      
        marginTop: 10
    },
    buttons: {
        width:320,
        height:50,
        backgroundColor:'#4757e6',
        borderRadius:9,
        justifyContent:'center',
        alignItems:'center',
        margin:10,
        
        
    },
    buttontext: {
        color:'white',
       fontWeight:'500',
       fontSize:20
        
    },
    Image:{
        width:300,
        height:190,
        marginTop:20
    },
    Input: {
        // margin:0,
        // marginBottom:10,
        // marginTop:0
        
    },
    circle:{
        width: 250,
        height: 250,
        borderRadius: 250 / 2,
        backgroundColor: '#FF9800',
        marginLeft:350,
       
    },
    logo:{
        width:70,
        height:20,
        // bottom:-0,
        // left:71
    }
});

export default Login;


// import { View, Text } from 'react-native'
// import React from 'react'

// export default function Login() {
//   return (
//     <View>
//       <Text>Login</Text>
//     </View>
//   )
// }