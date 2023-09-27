import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import Colors from '../Shared/Colors';
import { AntDesign } from '@expo/vector-icons';



export default function Login() {
  return (
    <View style={{ paddingTop: 10}}>
      <Image source={require('./../Assets/Image/login.jpg')} style={{
          width: '100%',
          height: 300,
          marginTop:25
        }} />
        <View style={ styles.container} > 
            <Text style={ styles.welcomeText}>Welcome to CodeBox</Text>
            <Text style={{textAlign: 'center', marginTop:80, fontSize: 20}}>Login/Signup</Text>
            <View style={styles.button}> 
            <AntDesign name="google" size={24} color="white" style={{ marginRight: 20}} /> 
                <Text style={{ color: Colors.white}}>
                    Sign in with Google</Text>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        marginTop: -30,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        backgroundColor: 'white'
    },
    welcomeText: {
        fontSize :35, 
        textAlign: 'center', 
        fontWeight: 'bold',
        paddingTop: 10,
    },
    button: {
        backgroundColor: Colors.primary,
        padding: 10,
        margin: 30,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
    }
});