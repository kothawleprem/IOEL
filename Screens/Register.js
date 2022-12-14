import React, { useState } from 'react';
import { View, StyleSheet ,TouchableOpacity ,Text } from 'react-native'
import { auth } from './firebase';
import { Input } from "@rneui/themed";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Register = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState('');

    const register = ( ) => {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Registered
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name,
                photoURL: avatar ? avatar : 'https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x',
            })
            .then(() => {
              alert('Registered, please login.'),
              navigation.navigate('Login');
            })
            .catch((error) => {
                alert(error.message);
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
        });
    }

    return (
        <View style={styles.container}>
            <Input
                placeholder='Enter your name'
                label='Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Input
                placeholder='Enter your email'
                label='Email'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder='Enter your password'
                label='Password'
                value={password} onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            {/* <Input
                placeholder='Enter your image url'
                label='Profile Picture'
                value = {avatar}
                onChangeText={text => setAvatar(text)}
            /> */}
               <TouchableOpacity style={styles.buttons} onPress={register}>
             <Text style={styles.buttontext}>Register</Text> 
             </TouchableOpacity>
            
            {/* <Button title='register' onPress={register} style={styles.button} /> */}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#ffff',
        padding: 10,
        // marginTop: 9,
       
    },
    button: {
        width: 370,
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
});

export default Register;